import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <header className="header">
      <img src="/assets/aralogo.png" alt="logo" className="logoclass" />
      <nav>
        <ul className="nav">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About Us</Link></li>
          <li><Link to="/services" className="link">Services</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <li><Link to="/appointment" className="link">Appointment</Link></li>

          {/* Login / Logout button */}
          {!role ? (
            <li><Link to="/login" className="link">Login</Link></li>
          ) : (
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
