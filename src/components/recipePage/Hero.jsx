import "./Hero.css";
import backgroundImage from "../../assets/heroR.jpg";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="recipe-header">
            <h1>Banana &amp; Blueberry <br />French Toast</h1>
          </div>

          <div className="ingredients">
            <h3>Ingredients:</h3>

            <div className="ingredients-group">
              <h4>For the French Toast:</h4>
              <ul>
                <li>3 slices of sandwich bread (preferably slightly stale or thick-cut)</li>
                <li>2 eggs</li>
                <li>1/4 cup milk (or plant-based milk)</li>
                <li>1 tsp vanilla extract (optional)</li>
                <li>1/2 tsp cinnamon (optional)</li>
                <li>Butter or oil for frying</li>
              </ul>
            </div>

            <div className="ingredients-group">
              <h4>Toppings:</h4>
              <ul>
                <li>1 banana (sliced)</li>
                <li>1/2 cup fresh blueberries (for drizzling)</li>
                <li>Powdered sugar (for dusting, optional)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}