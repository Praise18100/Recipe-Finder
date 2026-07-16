import "./findRecipeHero.css";
import { LuUserSearch } from "react-icons/lu";

function FindRecipeHero({ query, onSearch }) {
  return (
    <section className="recipe-title">
      <h1>Food Recipes</h1>

      <div className="title-line"></div>

      <p>
        Delicious meals made simple filter by cravings, cuisine, time, or
        dietary needs. Find recipes that match your unique taste.
      </p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for recipes here..."
          value={query}
          onChange={(e) => onSearch(e.target.value)}
        />

        <div className="search-icons">
          <LuUserSearch />
        </div>
      </div>
    </section>
  );
}

export default FindRecipeHero;