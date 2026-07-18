import { FiSearch } from "react-icons/fi";
import "./foodRecipes.css";
import burgerImg from "../../assets/burgers.png";

// Strip HTML tags Spoonacular includes in its summary text
function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "");
}

export default function FoodRecipes({ query, onQueryChange, onSearch, results, loading }) {
  const defaultRecipes = Array(4).fill({
    title: "Cheezy Burger",
    description:
      "Juicy, flavorful, and endlessly customizable burgers are the ultimate comfort food. Whether stacked with classic cheese and lettuce or loaded with gourmet toppings, there's a burger for every craving.",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const renderCards = () => {
    // Loading state
    if (loading) {
      return (
        <p style={{ textAlign: "center", padding: "2rem" }}>
          Searching for recipes...
        </p>
      );
    }

    // No search yet — show the original default cards
    if (results === null) {
      return (
        <div className="recipes-grid">
          {defaultRecipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <div className="recipe-image-container">
                <div className="image-oval">
                  <img
                    src={burgerImg}
                    alt={recipe.title}
                    className="card-avatar"
                  />
                </div>
              </div>
              <div className="card-info">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Search happened but nothing matched
    if (results.length === 0) {
      return (
        <p style={{ textAlign: "center", padding: "2rem" }}>
          No recipes found. Try a different search.
        </p>
      );
    }

    // Render real search results from Spoonacular
    return (
      <div className="recipes-grid">
        {results.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image-container">
              <div className="image-oval">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="card-avatar"
                />
              </div>
            </div>
            <div className="card-info">
              <h3>{recipe.title}</h3>
              <p>{stripHtml(recipe.summary).slice(0, 150)}...</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="recipes-section">
      <div className="recipes-header">
        <h2>Food Recipes</h2>
        <p>
          Delicious meals made simple – filter by cravings, cuisine, time, or
          dietary needs. Find recipes that match your unique taste.
        </p>
      </div>

      <div className="search-container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search for recipe here ..."
            className="search-input"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <FiSearch
            className="search-icon"
            onClick={onSearch}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {renderCards()}
    </section>
  );
}