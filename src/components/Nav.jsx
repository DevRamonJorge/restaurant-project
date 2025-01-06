import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <header>
      <div className="image-logo">
        <img src={logo} alt="Logo" />
      </div>
      
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
        </ul>
      </nav>

      <button>order now</button>
    </header>
  );
};

export default Nav;
