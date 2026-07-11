import "./recipeList.css";

import { motion } from "framer-motion";

import burger from "../../assets/burger.png";
import pizza from "../../assets/pizza.png";
import pasta from "../../assets/pasta.png";
import salad from "../../assets/salad.png";

function recipeList() {
  return (
    <section className="recipe-section">
      <div className="recipe-grid">

        {/* Burger */}
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

        {/* Pizza */}
        <div className="recipe-card">
          <div className="card-content">

            <img
              src={pizza}
              alt="Veggie Pizza"
            />

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

        {/* Pasta */}
        <div className="recipe-card">
          <div className="card-content">

            <img
              src={pasta}
              alt="Creamy Pasta"
            />

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

        {/* Salad */}
        <div className="recipe-card">
          <div className="card-content">

            <img
              src={salad}
              alt="Fresh Salad"
            />

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

export default recipeList;