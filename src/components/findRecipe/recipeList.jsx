import "./recipeList.css";

import { motion } from "framer-motion";

import burger from "../../assets/burger.png";
import pizza from "../../assets/pizza.png";
import pasta from "../../assets/pasta.png";
import salad from "../../assets/salad.png";

// Strip HTML tags Spoonacular includes in its summary text
function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "");
}

function RecipeList({ results, loading }) {
  // Loading state
  if (loading) {
    return (
      <section className="recipe-section">
        <p style={{ textAlign: "center", padding: "2rem" }}>
          Searching for recipes...
        </p>
      </section>
    );
  }

  // No search yet — show the original hardcoded cards as default content
  if (results === null) {
    return (
      <section className="recipe-section">
        <div className="recipe-grid">

          <div className="recipe-card">
            <div className="card-content">
              <motion.img
                src={burger}
                alt="Cheesy Burger"
                initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              />
              <div className="card-text">
                <h3>Cheesy Burger</h3>
                <div className="card-line"></div>
                <p>
                  A juicy beef patty layered with melted cheddar cheese,
                  crisp lettuce, tomatoes, and our signature sauce,
                  served on a soft toasted bun.
                </p>
              </div>
            </div>
          </div>

          <div className="recipe-card">
            <div className="card-content">
              <img src={pizza} alt="Veggie Pizza" />
              <div className="card-text">
                <h3>Veggie Pizza</h3>
                <div className="card-line"></div>
                <p>
                  A delicious blend of mozzarella cheese,
                  fresh vegetables, olives, and rich tomato sauce
                  baked on a crispy golden crust.
                </p>
              </div>
            </div>
          </div>

          <div className="recipe-card">
            <div className="card-content">
              <img src={pasta} alt="Creamy Pasta" />
              <div className="card-text">
                <h3>Creamy Pasta</h3>
                <div className="card-line"></div>
                <p>
                  Tender pasta tossed in a rich creamy garlic sauce
                  with parmesan cheese and fresh herbs.
                </p>
              </div>
            </div>
          </div>

          <div className="recipe-card">
            <div className="card-content">
              <img src={salad} alt="Fresh Salad" />
              <div className="card-text">
                <h3>Fresh Salad</h3>
                <div className="card-line"></div>
                <p>
                  A refreshing mix of lettuce, cucumbers,
                  tomatoes, avocado and carrots tossed
                  in a light homemade vinaigrette.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

  // Search happened but nothing matched
  if (results.length === 0) {
    return (
      <section className="recipe-section">
        <p style={{ textAlign: "center", padding: "2rem" }}>
          No recipes found. Try a different search.
        </p>
      </section>
    );
  }

  // Render real search results from Spoonacular
  return (
    <section className="recipe-section">
      <div className="recipe-grid">
        {results.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <div className="card-content">
              <img src={recipe.image} alt={recipe.title} />
              <div className="card-text">
                <h3>{recipe.title}</h3>
                <div className="card-line"></div>
                <p>{stripHtml(recipe.summary).slice(0, 150)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecipeList;