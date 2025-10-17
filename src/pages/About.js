import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

function About() {
  return (
    <div className="about">
      <Header />

      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Aravind Eye Foundation</h1>
          <p>Vision with Compassion. Service with Excellence.</p>
        </div>
      </section>

      <main className="about-content">
        {/* Founder Story */}
        <section className="history-section">
          <div className="history-text">
            <h2>Aravind’s First Clinic</h2>
            <p>
              The problem of avoidable blindness rapidly escalating remained a
              major cause of concern in the Indian healthcare scenario. In a
              developing country like India, the government alone cannot meet
              the health needs of all due to challenges like population growth,
              inadequate infrastructure, low income, aging population, and
              illiteracy.
            </p>
            <p>
              Realizing this, <strong>Dr. Venkataswamy</strong> envisioned an
              alternate health care model that could supplement the efforts of
              the government while remaining self-supporting. Following his
              retirement in 1976, he established the GOVEL Trust, under which
              Aravind Eye Hospitals were founded.
            </p>
            <p>
              The hospitals are named after <strong>Sri Aurobindo</strong>, one
              of the 20th century’s most revered spiritual leaders. His
              teachings inspire transcendence and service through divine work.
            </p>
            <p>
              From a humble 11-bed clinic with 4 doctors, Dr. V built what is
              now one of the largest eye care facilities in the world —
              dedicated to compassionate service for sight.
            </p>
          </div>
          <div className="history-img">
            <img src="/assets/drvenkataswamy.jpg" alt="Founder" />
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="vision-mission">
          <h2>Our Vision & Mission</h2>
          <div className="vm-container">
            <div className="vm-card">
              <i className="fas fa-eye"></i>
              <h3>Our Vision</h3>
              <p>
                To eliminate needless blindness and provide world-class eye care
                accessible to every section of society.
              </p>
            </div>
            <div className="vm-card">
              <i className="fas fa-hands-helping"></i>
              <h3>Our Mission</h3>
              <p>
                To provide compassionate, high-quality, and affordable eye care
                through excellence in service, innovation, and education.
              </p>
            </div>
          </div>
        </section>

        {/* Aravind Model Section */}
        <section className="model-section">
          <h2>The Aravind Model</h2>
          <p className="model-intro">
            Aravind Eye Care System provides high-quality, compassionate, and
            affordable eye care to all through an innovative, sustainable model.
          </p>

          <div className="model-points">
            <div className="model-card">
              <i className="fas fa-heartbeat"></i>
              <h3>Compassionate Care</h3>
              <p>Quality and empathy for every patient, regardless of income.</p>
            </div>
            <div className="model-card">
              <i className="fas fa-users"></i>
              <h3>High Volume Efficiency</h3>
              <p>Handling large numbers while maintaining excellent quality.</p>
            </div>
            <div className="model-card">
              <i className="fas fa-balance-scale"></i>
              <h3>Cross-Subsidization</h3>
              <p>Affordable care supported by efficient management.</p>
            </div>
            <div className="model-card">
              <i className="fas fa-hand-holding-medical"></i>
              <h3>Community Outreach</h3>
              <p>Bringing services to rural and underserved populations.</p>
            </div>
            <div className="model-card">
              <i className="fas fa-flask"></i>
              <h3>Research & Training</h3>
              <p>Continuous learning to improve the quality of eye care.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
