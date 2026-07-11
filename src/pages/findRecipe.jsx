import FindRecipeHero from "../components/findRecipe/FindRecipeHero";
import RecipeList from "../components/findRecipe/RecipeList";
import Testimonial from "../components/findRecipe/Testimonial";
import Contact from "../components/findRecipe/Contact";

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