import Hero from "../components/homePage/hero";
import RecipeFinder from "../components/homePage/recipeFinder";
import FoodRecipes from "../components/homePage/foodRecipes";
import Review from "../components/common/review";
import ContactForm from "../components/common/contactForm";

export default function Home() {
  return (
    <div className="homepage-wrapper">
      <Hero />
      <RecipeFinder />
      <FoodRecipes />
      <Review />
      <ContactForm />
    </div>
  );
}
