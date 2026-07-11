import FindRecipeHero from "../components/findRecipe/findRecipeHero";
import RecipeList from "../components/findRecipe/recipeList";
import Testimonial from "../components/findRecipe/testimonial";
import Contact from "../components/findRecipe/contact";

function FindRecipe() {
  return (
    <div className="find-recipe">
      <FindRecipeHero />
      <RecipeList />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default FindRecipe;
