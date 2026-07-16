import { FaBolt, FaDumbbell, } from "react-icons/fa";
import { RiFridgeLine } from "react-icons/ri";
import "./EmptyState.css";
import chefImage from "../../assets/chef.png";

export default function EmptyState() {
  return (
    <div className="empty-state-container">
      <div className="chef-profile">
        <img src={chefImage} alt="Chef Hilda" className="chef-avatar" />
        <h2 className="chef-name">Hi there! I'm your AI Chef Hilda</h2>
        <p className="chef-tagline">200 + 227 Recipes</p>
        <p className="chef-description">
          Ask me anything about recipes, ingredients, cooking tips, or let me
          help you find the perfect meal.
        </p>
      </div>

      <div className="suggestions-grid">
        <div className="suggestion-card">
          <div className="suggestion-icon">
            <FaBolt />
          </div>
          <h3>Quick dinner ideas</h3>
          <p>Get fast 15-30 min recipes for busy evenings</p>
        </div>
        <div className="suggestion-card">
          <div className="suggestion-icon">
            <FaDumbbell />
          </div>
          <h3>High protein meals</h3>
          <p>Nutritious options to fuel your workout</p>
        </div>
        <div className="suggestion-card">
          <div className="suggestion-icon">
            <RiFridgeLine />
          </div>
          <h3>What in my fridge </h3>
          <p>Personalized suggestions based on your mood</p>
        </div>
      </div>
    </div>
  );
}
