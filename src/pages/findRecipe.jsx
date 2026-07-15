import FindRecipeHero from "../components/findRecipe/findRecipeHero";
import RecipeList from "../components/findRecipe/recipeList";
import Testimonial from "../components/common/testimonial";
import Contact from "../components/common/contactForm";

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
