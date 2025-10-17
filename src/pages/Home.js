import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const slides = [
    {
      image: "/assets/doctor-checking-patient-before-rhinoplasty-side-view-min.webp",
      text: "Advanced Eye Care with Compassion",
    },
    {
      image: "/assets/side-view-woman-getting-her-eyes-checked-min.webp",
      text: "Your Vision, Our Mission",
    },
    {
      image: "/assets/woman-getting-eye-exam-ophthalmologist-office-min.webp",
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

      {/* Hero Slider */}
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
        {/* About Us */}
        <section className="overview">
          <h2>About Our Hospital</h2>
          <div className="overview-container">
            <img src="/assets/hospital.jpg" alt="Hospital" className="overview-img" />
            <p>
              Founded with a mission to eliminate avoidable blindness, our hospital
              combines compassion and technology to deliver exceptional eye care.
              Every year, we help thousands restore and protect their vision through
              expert diagnosis, treatment, and surgery.
            </p>
          </div>
          <a href="/about" className="btn-secondary">Read More</a>
        </section>

        {/* Services */}
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
            <div className="card">
              <img src="/assets/Retina care.jpg" alt="Retina" />
              <h3>Retina Care</h3>
              <p>Comprehensive care for retinal diseases and diabetic eye conditions.</p>
            </div>
            <div className="card">
              <img src="/assets/pediatric.webp" alt="Pediatric" />
              <h3>Pediatric Ophthalmology</h3>
              <p>Specialized care for children’s eye health and development.</p>
            </div>
            <div className="card">
              <img src="/assets/cornea.jpg" alt="Cornea" />
              <h3>Cornea Clinic</h3>
              <p>Treatment for corneal injuries, infections, and transplants.</p>
            </div>
          </div>
        </section>

        {/* Our Doctors */}
        <section className="doctors">
          <h2>Our Expert Doctors</h2>
          <div className="doctor-cards">
            <div className="doctor-card">
              <img src="/assets/doctor3.png" alt="Doctor 1" />
              <h3>Dr. A. Ramesh</h3>
              <p>Senior Ophthalmologist, Cataract & Glaucoma Specialist</p>
            </div>
            <div className="doctor-card">
              <img src="/assets/doctor5.png" alt="Doctor 2" />
              <h3>Dr. Priya Sharma</h3>
              <p>Cornea & Refractive Surgery Specialist</p>
            </div>
            <div className="doctor-card">
              <img src="/assets/doctor7.jpg" alt="Doctor 3" />
              <h3>Dr. Naveen Kumar</h3>
              <p>Pediatric Ophthalmologist</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Our Patients Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial">
              <p>"Excellent care and professional service. My cataract surgery was painless and successful!"</p>
              <h4>- Rajesh K</h4>
            </div>
            <div className="testimonial">
              <p>"The doctors here truly care about patients. I regained my confidence after LASIK!"</p>
              <h4>- Sneha P</h4>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="cta">
          <h2>Book an Appointment Today</h2>
          <p>Your eye health is our priority. Schedule a consultation with our specialists now.</p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
