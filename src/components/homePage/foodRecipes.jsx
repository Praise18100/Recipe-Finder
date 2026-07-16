import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./foodRecipes.css";
import burgerImg from "../../assets/burgers.png";

export default function FoodRecipes() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/findRecipe?q=${encodeURIComponent(query)}`);
    }
  };

  const recipes = Array(4).fill({
    title: "Cheezy Burger",
    description:
      "Juicy, flavorful, and endlessly customizable burgers are the ultimate comfort food. Whether stacked with classic cheese and lettuce or loaded with gourmet toppings, there's a burger for every craving.",
  });

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
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <FiSearch className="search-icon" onClick={handleSearch} style={{ cursor: "pointer" }} />
        </div>
      </div>

      <div className="recipes-grid">
        {recipes.map((recipe, index) => (
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
    </section>
  );
}
