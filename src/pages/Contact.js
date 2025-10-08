import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <Header />  
      <h1>Contact Us</h1>
      <div className="contact-container">
        {/* Info */}
        <div className="contact-info">
          <h2>Our Contact Details</h2>
          <p><strong>Address:</strong> 123 Eye Care Street, Pondicherry, India</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> contact@eyecarehospital.com</p>
          <p><strong>Working Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
