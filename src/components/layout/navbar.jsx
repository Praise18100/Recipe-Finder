import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./navbar.css"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-dark">Recipe</span>
        <span className="logo-gold">Finder</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#">Home</a></li>

        <li><a href="#">About</a></li>

        <li><a href="#">My Recipe</a></li>

        <li><a href="#">Testimonials</a></li>

        <li><a href="#">Contact</a></li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>

    </nav>
  );
}

export default Navbar;