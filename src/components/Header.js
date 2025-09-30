import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src= "/assets/logo.svg" alt="logo" className="logoclass"/>
      <nav>
        <ul className="nav">
  <li><Link to="/" className="link">Home</Link></li>
  <li><Link to="/about" className="link">About Us</Link></li>
  <li><Link to="/services" className="link">Services</Link></li>
  <li><Link to="/contact" className="link">Contact</Link></li>
  <li><Link to="/login" className="link">Login</Link></li>
</ul>

      </nav>
    </header>
  );
}

export default Header;
