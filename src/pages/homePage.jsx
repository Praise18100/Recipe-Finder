import Hero from '../components/homePage/hero';
import RecipeFinder from '../components/homePage/recipeFinder';
import FoodRecipes from '../components/homePage/foodRecipes';
import Review from '../components/common/review';
import ContactForm from '../components/common/contactForm';
import FindRecipeHero from '../components/findRecipe/findRecipeHero';
import RecipeList from '../components/findRecipe/recipeList';
import Testimonial from '../components/findRecipe/testimonial';
import Contact from '../components/findRecipe/contact';
 function Home() {
  return (
    <div className="homepage-wrapper">
      <Hero />
      <RecipeFinder />
      <FoodRecipes />
      <Review />
      <ContactForm />
       <FindRecipeHero />
      <RecipeList />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Home;