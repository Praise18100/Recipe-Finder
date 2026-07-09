import Hero from '../components/homePage/hero';
import RecipeFinder from '../components/homePage/recipeFinder';
import FoodRecipes from '../components/homePage/foodRecipes';
import Testimonials from '../components/homePage/testimonials';
import ContactForm from '../components/homePage/contactForm';

export default function Home() {
  return (
    <div className="homepage-wrapper">
      <Hero />
      <RecipeFinder />
      <FoodRecipes />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
