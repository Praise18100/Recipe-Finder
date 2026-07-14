import { useState, useEffect } from "react";
import FindRecipeHero from "../components/findRecipe/findRecipeHero";
import RecipeList from "../components/findRecipe/recipeList";
import Testimonial from "../components/findRecipe/testimonial";
import Contact from "../components/findRecipe/contact";
import SearchResults from "../components/findRecipe/searchResults";

function FindRecipe() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Don't search if query is empty — clear results
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    // Debounce: wait 500ms after user stops typing before fetching
    const debounce = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/recipes/search?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        if (data.success) {
          setResults(data.recipes);
        }
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="find-recipe">
      <FindRecipeHero query={query} onSearch={setQuery} />

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
