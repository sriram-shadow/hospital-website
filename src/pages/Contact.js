import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <main className="contact-main">
        <h1>Contact Us</h1>

        <div className="contact-container">
          {/* Left: Info Section */}
          <div className="contact-info">
            <h2>Hospital Address</h2>
            <p>
              <strong>Address:</strong> Aravind Eye Hospital, 123 Vision Care Street, Pondicherry, India – 605001
            </p>
            <p>
              <strong>Emergency:</strong> +91 99999 88888
            </p>
            <p>
              <strong>Appointment:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Email:</strong> info@aravindeyehospital.com
            </p>
            <p>
              <strong>Working Hours:</strong> Monday – Saturday: 8:00 AM – 6:00 PM <br />
              Sunday: Emergency Only
            </p>

            <div className="map-container">
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps?q=pondicherry+aravind+eye+hospital&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Form Section */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Phone Number" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
