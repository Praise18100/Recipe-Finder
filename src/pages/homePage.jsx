import { useState } from "react";
import Hero from "../components/homePage/hero";
import AboutSection from "../components/homePage/aboutSection";
import FoodRecipes from "../components/homePage/foodRecipes";
import Testimonial from "../components/common/testimonial";
import ContactForm from "../components/common/contactForm";

function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null); // null = no search yet
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (query.trim() === "") return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `http://localhost:5000/api/recipes/search?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResults(data.recipes);
    } catch (err) {
      setError(err.message || "Failed to fetch recipes.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage-wrapper">
      <Hero />
      <AboutSection />
      <FoodRecipes
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
        results={results}
        loading={loading}
      />
      {error && (
        <p style={{ color: "red", textAlign: "center", padding: "1rem" }}>
          {error}
        </p>
      )}
      <Testimonial />
      <ContactForm />
    </div>
  );
}

export default Home;