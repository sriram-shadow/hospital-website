import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: About */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing world-class eye care through advanced technology,
            expert doctors, and compassionate service.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>📍 123 Vision Street, Pondicherry, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@myhospital.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 My Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
