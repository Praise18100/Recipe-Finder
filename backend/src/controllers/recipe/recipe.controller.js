const fs = require("fs");
const path = require("path");

// Load local recipes
const recipesFilePath = path.join(__dirname, "..", "..", "data", "recipes.json");
let localRecipes = [];

try {
  const fileContent = fs.readFileSync(recipesFilePath, "utf8");
  localRecipes = JSON.parse(fileContent);
} catch (error) {
  console.error("Error reading local recipes file in controller:", error);
}

// Helper: Standardize TheMealDB format to match our local format
function mapMealDBToRecipe(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure && measure.trim() ? measure.trim() + " " : ""}${ingredient.trim()}`);
    }
  }

  const instructions = meal.strInstructions
    ? meal.strInstructions
        .split(/\r?\n/)
        .map((step) => step.trim().replace(/^\d+\.\s*/, "")) // remove step numbers
        .filter((step) => step.length > 2)
    : [];

  return {
    id: meal.idMeal,
    name: meal.strMeal,
    description: `A delicious ${meal.strCategory} delicacy from ${meal.strArea} cuisine.`,
    category: meal.strCategory,
    image: meal.strMealThumb,
    ingredients: ingredients,
    instructions: instructions,
  };
}

// Search and filter recipes: GET /api/recipes/search?q={query}
const searchRecipes = async (req, res) => {
  const query = (req.query.q || "").toLowerCase().trim();

  try {
    // A. Local search inside recipes.json
    let localMatches = [];
    if (query === "") {
      localMatches = localRecipes; // Show all local foods if query is empty
    } else {
      localMatches = localRecipes.filter((recipe) => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const descMatch = recipe.description.toLowerCase().includes(query);
        const ingredientMatch = recipe.ingredients.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        return nameMatch || descMatch || ingredientMatch;
      });
    }

    // B. External search on TheMealDB API
    let mealDBMatches = [];
    if (query !== "") {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        if (data.meals) {
          mealDBMatches = data.meals.map(mapMealDBToRecipe);
        }
      } catch (err) {
        console.error("TheMealDB API fetch failed in controller:", err.message);
      }
    } else {
      // If query is empty, pull some default global meals
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
        );
        const data = await response.json();
        if (data.meals) {
          mealDBMatches = data.meals.slice(0, 4).map(mapMealDBToRecipe);
        }
      } catch (err) {
        console.error("Default TheMealDB fetch failed in controller:", err.message);
      }
    }

    const combinedResults = [...localMatches, ...mealDBMatches];

    res.status(200).json({
      success: true,
      count: combinedResults.length,
      recipes: combinedResults,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error: " + error.message,
    });
  }
};

// Get recipe by ID: GET /api/recipes/:id
const getRecipeById = async (req, res) => {
  const { id } = req.params;

  try {
    // A. Check local recipes first
    const localRecipe = localRecipes.find((r) => r.id === id);
    if (localRecipe) {
      return res.status(200).json({ success: true, recipe: localRecipe });
    }

    // B. Check TheMealDB API next
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    if (data.meals && data.meals.length > 0) {
      const meal = mapMealDBToRecipe(data.meals[0]);
      return res.status(200).json({ success: true, recipe: meal });
    }

    res.status(404).json({
      success: false,
      message: "Recipe not found",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching recipe details: " + error.message,
    });
  }
};

module.exports = {
  searchRecipes,
  getRecipeById,
};
