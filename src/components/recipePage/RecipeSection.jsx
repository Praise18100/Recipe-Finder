import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./RecipeSection.css";
import "./RecipeDetail.css";
import Cburger from "../../assets/c-burger.png";
import { FaSearch } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

export default function RecipeSection() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/findRecipe?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only fetch if there's an id in the URL
    if (!id) return;

    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE}/api/recipes/${id}`);
        const data = await response.json();
        if (data.success) {
          setRecipe(data.recipe);
        }
      } catch (error) {
        console.error("Failed to fetch recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <section className="recipe-section" id="recipes">
        <p className="recipe-detail-loading">Loading recipe...</p>
      </section>
    );
  }

  // Dynamic recipe view — only shown when a recipe id is in the URL
  if (recipe) {
    return (
      <section className="recipe-section" id="recipes">
        <div className="recipe-detail-wrapper">

          <div className="recipe-detail-top">
            <img src={recipe.image} alt={recipe.name} className="recipe-detail-img" />
            <div className="recipe-detail-meta">
              <span className="recipe-detail-category">{recipe.category}</span>
              <h2 className="recipe-detail-name">{recipe.name}</h2>
              <p className="recipe-detail-desc">{recipe.description}</p>
            </div>
          </div>

          <div className="recipe-detail-body">
            <div className="recipe-detail-ingredients">
              <h3>Ingredients</h3>
              <ul>
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>

            <div className="recipe-detail-instructions">
              <h3>Instructions</h3>
              <ol>
                {recipe.instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

        </div>
      </section>
    );
  }

  // Default view — original hardcoded content, completely unchanged
  return (
    <section className="recipe-section" id="recipes">
      <h2>Food Recipes</h2>

      <p>
        Delicious meals made simple – filter by cravings, cuisine, time, or
        dietary needs. Find recipes that match your unique taste.
      </p>

      <div className="recipe-search">
        <input
          type="text"
          placeholder="Search for recipe here ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      <div className="recipe-grid">
        <div className="recipe-card">
          <img src={Cburger} alt="Cheezy Burger" />
          <div>
            <h3>Cheezy Burger</h3>
            <p>
              Juicy, flavorful, and endlessly customizable burgers are the
              ultimate comfort food. Whether stacked with classic cheese and
              lettuce or loaded with gourmet toppings, there's a burger for
              every craving.
            </p>
          </div>
        </div>

        <div className="recipe-card">
          <img src={Cburger} alt="Cheezy Burger" />
          <div>
            <h3>Cheezy Burger</h3>
            <p>
              Juicy, flavorful, and endlessly customizable burgers are the
              ultimate comfort food. Whether stacked with classic cheese and
              lettuce or loaded with gourmet toppings, there's a burger for
              every craving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
