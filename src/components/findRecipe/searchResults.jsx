import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./searchResults.css";

function SearchResults({ results, loading }) {
  const navigate = useNavigate();

  const handleClick = (recipe) => {
    navigate(`/recipe?id=${recipe.id}`, { state: { recipe } });
  };

  if (loading) {
    return (
      <div className="search-results-wrapper">
        <p className="search-loading">Searching...</p>
      </div>
    );
  }

  if (results.length === 0) return null;

  return (
    <section className="search-results-wrapper">
      <div className="search-results-header">
        <h2 className="search-results-title">Search Results</h2>
        <span className="search-results-count">{results.length} found</span>
      </div>

      <div className="search-results-grid">
        {results.map((recipe) => (
          <div
            key={recipe.id}
            className="search-result-card"
            onClick={() => handleClick(recipe)}
          >
            <img src={recipe.image} alt={recipe.name} />
            <div className="search-result-info">
              <span className="search-result-category">{recipe.category}</span>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SearchResults;
