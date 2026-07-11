import "./hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Find the Perfect Recipes to Match Your Cravings</h1>
        <p>
          Find the perfect dish for every craving — from quick weekday meals to
          gourmet delights. Search, save, and savor recipes made just for you.
        </p>
        <div className="hero-actions">
          <Link to="/recipe">
          <button className="btn-primary" >Find Recipe</button>
          </Link>
          <button className="btn-outline">Favorite Recipe</button>
        </div>
      </div>
    </section>
  );
}
