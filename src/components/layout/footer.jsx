import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* RecipeFinder Column */}
        <div className="footer-column">
          <h2>RecipeFinder</h2>
          <p>From quick bites to gourmet plates, discover recipes that make every meal unforgettable.</p>
          
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
            <li>Home</li>
            <li>About</li>
            <li>Recipes</li>
            <li>My Favorites</li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to stay updated</p>
          
          <div className="newsletter">
            <input 
              type="email" 
              placeholder="Enter Your Email address..." 
            />
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