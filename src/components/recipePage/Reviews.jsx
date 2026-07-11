import "./Reviews.css";
import reviews from "../../assets/reviews.png";
import alicia from "../../assets/alicia.png";

export default function Reviews() {
  return (
    <section className="reviews" style={{ backgroundImage: `url(${reviews})` }}>
      <div className="overlay">
        <h2>Happy Users Review</h2>

        <p>Don't just take our word for it – hear from our satisfied Users</p>

        <div className="review-card">
          <p className="review-text">
            "Recipe Finder has completely changed the way I cook! I love how
            easy it is to find meals based on what I have at home."
          </p>

          <div className="review-user">
            <img src={alicia} alt="Alicia Rain" />

            <div className="user-info">
              <h4>Alicia Rain</h4>
              <span>Food Critic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
