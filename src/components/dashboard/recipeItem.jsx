import "./recipeItem.css";

import tomaotoe from "../../assets/tomatoe.png";
import bread from "../../assets/bread.png";

function RecipeItem() {

  const recipes = [
    {
      image: tomaotoe,
      title: "Spring Tomato",
      description:
        "Fresh tomatoes with herbs and vegetables for a healthy homemade meal.",
      benefit:
        "Rich in Vitamin C and antioxidants that strengthen immunity and improve skin health.",
    },
    {
      image: bread,
      title: "Bread and Butter",
      description:
        "A light breakfast option that's quick, filling, and satisfying.",
      benefit:
        "Provides energy for the day and can be paired with healthy proteins or fruits.",
    },
  ];

  return (
    <section className="recipe-list">

      {recipes.map((recipe, index) => (

        <div className="recipe-item" key={index}>

          <img
            src={recipe.image}
            alt={recipe.title}
          />

          <div className="recipe-info">

            <h3>{recipe.title}</h3>

            <p>{recipe.description}</p>

          </div>

          <div className="recipe-benefit">

            <h3>Health Benefit</h3>

            <p>{recipe.benefit}</p>

          </div>

        </div>

      ))}

    </section>
  );
}

export default RecipeItem;