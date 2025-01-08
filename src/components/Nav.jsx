import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      
      <div className="image-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav>
        <ul className={menuOpen ? "active" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
        </ul>
      </nav>

      <button>Order Now</button>
    </header>
  );
};

export default Nav;