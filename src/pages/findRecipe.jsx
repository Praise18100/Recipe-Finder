import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FindRecipeHero from "../components/findRecipe/findRecipeHero";
import RecipeList from "../components/findRecipe/recipeList";
import Testimonial from "../components/findRecipe/testimonial";
import Contact from "../components/findRecipe/contact";
import SearchResults from "../components/findRecipe/searchResults";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";
console.log("[RecipeFinder] API_BASE =", API_BASE);

function FindRecipe() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't search if query is empty — clear results
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    // Debounce: wait 500ms after user stops typing before fetching
    const debounce = setTimeout(async () => {
      try {
        const response = await fetch(
          `${API_BASE}/api/recipes/search?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        if (data.success) {
          setResults(data.recipes);
        } else {
          setResults([]);
        }
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
        setError("Could not reach the server. Make sure the backend is running.");
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="find-recipe">
      <FindRecipeHero query={query} onSearch={setQuery} />

      {/* Error message if backend is unreachable */}
      {error && (
        <p style={{ color: "red", textAlign: "center", padding: "1rem" }}>{error}</p>
      )}

      {/* Show search results only when user has typed something */}
      {(loading || results.length > 0) && (
        <SearchResults results={results} loading={loading} />
      )}

      <RecipeList />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default FindRecipe;
