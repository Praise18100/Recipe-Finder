import "./review.css";
import avatar from "../../assets/avatar.png";

export default function Review() {
  return (
    <section className="review-section">
      <div className="review-overlay">
        <h2>Happy Users Review</h2>
        <p className="subtitle">
          Don't just take our word for it - hear from our satisfied Users
        </p>

        <div className="review-card">
          <p className="quote">
            "Recipe Finder has completely changed the way I cook! I love how
            easy it is to find meals based on what I have at home."
          </p>
          <div className="review-user">
            <img src={avatar} alt="Alicia Rain" className="review-avatar" />
            <div className="user-details">
              <h4>Alicia Rain</h4>
              <span>Food Critic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
