import Hero from "../components/recipePage/Hero";
import RecipeSection from "../components/recipePage/RecipeSection";
import Reviews from "../components/recipePage/Reviews";
import ContactForm from '../components/common/contactForm';

export default function Recipe() {
  return (
    <>
      <Hero />
      <RecipeSection />
      <Reviews />
      <ContactForm />
    </>
  );
} 