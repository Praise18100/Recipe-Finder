import "./RecipeSection.css";
import Cburger from "../../assets/c-burger.jpg";
import { FaSearch } from "react-icons/fa";

export default function RecipeSection() {
  return (
    <section className="recipe-section" id="recipes">
      <h2>Food Recipes</h2>

      <p>
        Delicious meals made simple – filter by cravings, cuisine, time, or
        dietary needs. Find recipes that match your unique taste.
      </p>

      <div className="recipe-search">
        <input type="text" placeholder="Search for recipe here ..." />

        <button>
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
