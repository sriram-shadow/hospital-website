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
        {/* Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

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
