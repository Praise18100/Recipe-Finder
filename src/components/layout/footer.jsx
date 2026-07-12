import "./footer.css";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const handleNavigateToTop = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* RecipeFinder Column */}
        <div className="footer-column">
          <h2>RecipeFinder</h2>
          <p>
            From quick bites to gourmet plates, discover recipes that make every
            meal unforgettable.
          </p>

          <div className="social-icons">
            <FaFacebook />
            <FaWhatsapp />
            <FaTiktok />
            <FaLinkedin />
          </div>
        </div>

        {/* Contact Us Column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>123 Gourmet Avenue, Lagos</p>
          <p>(555) 123-4567</p>
          <p>info@recipiefind.com</p>
        </div>

        {/* Links Column */}
        <div className="footer-column">
          <h3>Links</h3>

          <ul>
            <li>
              <Link to="/" onClick={(e) => handleNavigateToTop(e, "/")}>
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, "about")}
              >
                About
              </a>
            </li>

            <li>
              <Link
                to="/findRecipe"
                onClick={(e) => handleNavigateToTop(e, "/findRecipe")}
              >
                Recipe
              </Link>
            </li>
            <li>
              <Link
                to="/recipe"
                onClick={(e) => handleNavigateToTop(e, "/recipe")}
              >
                My Favourite
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to stay updated</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter Your Email address..." />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Recipe Finder All Rights Reserved. Designed by Aderonke</p>
      </div>
    </footer>
  );
}
