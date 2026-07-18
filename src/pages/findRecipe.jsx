import { useState } from "react";
import FindRecipeHero from "../components/findRecipe/findRecipeHero";
import RecipeList from "../components/findRecipe/recipeList";
import Testimonial from "../components/common/testimonial";
import Contact from "../components/common/contactForm";

function FindRecipe() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null); // null = no search yet
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    console.log("handleSearch fired, query =", query);
    if (query.trim() === "") return;

    setLoading(true);
    setError(null);

    try {
      console.log("Fetching:", `http://localhost:5000/api/recipes/search?query=${encodeURIComponent(query)}`);
      const res = await fetch(
        `http://localhost:5000/api/recipes/search?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResults(data.recipes);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to fetch recipes.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="find-recipe">
      <FindRecipeHero
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
      />

      {error && (
        <p style={{ color: "red", textAlign: "center", padding: "1rem" }}>
          {error}
        </p>
      )}

      <RecipeList results={results} loading={loading} />

      <Testimonial />
      <Contact />
    </div>
  );
}

export default FindRecipe;