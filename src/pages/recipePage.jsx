import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Hero from "../components/recipePage/Hero";
import RecipeSection from "../components/recipePage/RecipeSection";
import Reviews from "../components/recipePage/Reviews";
import ContactForm from '../components/common/contactForm';

export default function Recipe() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div style={{ paddingTop: id ? "100px" : "0" }}>
      {!id && <Hero />}
      <RecipeSection />
      <Reviews />
      <ContactForm />
    </div>
  );
}