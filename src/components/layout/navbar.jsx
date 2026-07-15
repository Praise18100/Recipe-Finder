import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${sectionId}`);
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-dark">Recipe</span>
        <span className="logo-gold">Finder</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
         <li>
          <Link to="/about">About</Link>
        </li>
        </li>
        <li>
          <Link to="/recipe">My-Recipe</Link>
        </li>
        <li>
          <a
            href="#testimonial"
            onClick={(e) => handleScrollToSection(e, "testimonial")}
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#contactForm"
            onClick={(e) => handleScrollToSection(e, "contactForm")}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>
    </nav>
  );
}

export default Navbar;
