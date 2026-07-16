import AboutSection from "../components/homePage/aboutSection";
import Testimonial from "../components/common/testimonial";
import ContactForm from "../components/common/contactForm";

function About() {
  return (
    <div className="homepage-wrapper">
      <AboutSection />
      <Testimonial />
      <ContactForm />
    </div>
  );
}

export default About;
