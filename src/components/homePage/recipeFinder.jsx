import "./recipeFinder.css";
import aboutImg from "../../assets/about.png";

export default function RecipeFinder() {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-image-container">
          <img
            src={aboutImg}
            alt="Delicious grilled dishes"
            className="about-img"
          />
        </div>
        <div className="about-text-content">
          <h2>RecipeFinder</h2>
          <div className="about-paragraphs">
          <p>
            At Recipe Finder, we believe that everyone deserves to enjoy
            delicious meals, whether you're a seasoned chef or just starting in
            the kitchen.
          </p>
          <p>
            Our mission is to help you discover recipes that match your taste,
            lifestyle, and dietary preferences — quickly and effortlessly.
          </p>
          <p>
            With a growing library of handpicked dishes, personalized
            suggestions, and easy-to-follow instructions, we make cooking fun,
            simple, and inspiring.
          </p>
          <p>
            Whether you're planning dinner, exploring new cuisines, or saving
            your favorite meals, Recipe Finder is your go-to kitchen companion.
          </p>
          </div>
          <div className="founder-signature">
            <h3>Adeyemo Aderonke</h3>
            <span>Recipe Curator & Founder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
