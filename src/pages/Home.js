import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
 const slides = [
  {
    image: "/assets/doctor-checking-patient-before-rhinoplasty-side-view-min.jpg",
    text: "Advanced Eye Care with Compassion",
  },
  {
    image: "/assets/side-view-woman-getting-her-eyes-checked-min.jpg",
    text: "Your Vision, Our Mission",
  },
  {
    image: "/assets/woman-getting-eye-exam-ophthalmologist-office-min.jpg",
    text: "World-Class Doctors, Trusted by Thousands",
  },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home">
      <Header />

      {/* Hero Slider Section */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1>{slide.text}</h1>
              <a href="/services" className="btn-primary">
                Explore Services
              </a>
            </div>
          </div>
        ))}
      </section>

      <main className="home-content">
        {/* Overview Section */}
        <section className="overview">
          <h2>About Our Hospital</h2>
          <img src="/assets/hospital.jpg" alt="Hospital" className="overview-img" />
          <p>
            
            Aravind Pondicherry was inaugurated in 2003 by His Excellency
            Dr. A. P. J. Abdul Kalam, the then President of India. Spread over
            20 acres, it can accommodate 140 paying patients and 450 subsidised
            patients. In 2024, we handled over 755,000 outpatient visits and
            performed 92,000 surgeries.
          </p>
        </section>

        {/* Services Section */}
        <section className="services">
          <h2>Our Specialties</h2>
          <div className="service-cards">
            <div className="card">
              <img src="/assets/cataract.jpg" alt="Cataract" />
              <h3>Cataract Surgery</h3>
              <p>Safe and advanced procedures to restore your vision.</p>
            </div>
            <div className="card">
              <img src="/assets/lasik treatment.jpeg" alt="LASIK" />
              <h3>LASIK Treatment</h3>
              <p>Freedom from glasses with precision laser technology.</p>
            </div>
            <div className="card">
              <img src="/assets/glaucoma.jpg" alt="Glaucoma" />
              <h3>Glaucoma Care</h3>
              <p>Early diagnosis and management for healthy eyes.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose">
          <h2>Why Choose Eye Foundation?</h2>
          <div className="reasons">
            <div className="reason">
              <i className="fas fa-user-md"></i>
              <h3>Experienced Specialists</h3>
              <p>Our doctors are pioneers in the field of ophthalmology.</p>
            </div>
            <div className="reason">
              <i className="fas fa-eye"></i>
              <h3>Advanced Equipment</h3>
              <p>We use the latest technology for accurate diagnosis and care.</p>
            </div>
            <div className="reason">
              <i className="fas fa-heart"></i>
              <h3>Compassionate Care</h3>
              <p>We treat every patient with empathy and dedication.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
