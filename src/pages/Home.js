import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <main className="home-content" >
        <h1 style={{ textAlign: "center" }}>Welcome to Eye Foundation Hospital</h1>
         <img src= "/assets/hospital.jpg" alt="Hospital" className="home-image"  style={{ display: "block", margin: "20px auto", maxWidth: "80%", borderRadius: "10px" }} />
         <h2>Overview</h2>
         <p>Aravind Pondicherry was inaugurated in 2003 by His Excellency Dr. A. P. J. Abdul Kalam, the then President of India. Spread over 20 acres of land, this facility with a built-up area of 200,000 Sq. ft, can accommodate around 140 paying patients and 450 subsidised patients.
In the year ending March 2024, Aravind-Pondicherry handled around 755,067 outpatient visits and performed around 92,017 surgeries.</p>
             {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to Eye Foundation Hospital</h1>
            <p>Your vision, our mission. Expert eye care you can trust.</p>
            <a href="/services" className="btn-primary">Our Services</a>
          </div>
          <div className="hero-img">
            <img src="/assets/doctors.jpg" alt="Hospital" />
          </div>
        </section>

        

        {/* Services Section */}
        <section className="services">
          <h2>Our Specialties</h2>
          <div className="service-cards">
            <div className="card">
              <h3>Cataract Surgery</h3>
              <p>Safe and advanced procedures to restore your vision.</p>
            </div>
            <div className="card">
              <h3>LASIK Treatment</h3>
              <p>Freedom from glasses with precision laser technology.</p>
            </div>
            <div className="card">
              <h3>Glaucoma Care</h3>
              <p>Early diagnosis and management for healthy eyes.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;