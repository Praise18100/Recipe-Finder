import Hero from '../components/homePage/hero';
import About from '../components/homePage/about';
import FoodRecipes from '../components/homePage/foodRecipes';
import Review from '../components/common/review';
import ContactForm from '../components/common/contactForm';

 function Home() {
  return (
    <div className="homepage-wrapper">
      <Hero />
      <About/>
      <FoodRecipes />
      <Review />
      <ContactForm />
    </div>
  );
}

export default Home;