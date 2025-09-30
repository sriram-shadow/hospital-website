import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Services.css";

function Services() {
  return (
    <div>
      <Header />
      <main className="services-page">
        <h1>Our Eye Care Services</h1>
        <p className="intro">
          We provide specialized diagnosis and treatment for a wide range of
          eye conditions and diseases.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <h2>Cataract</h2>
            <img src= "/assets/Cataract.jpg" alt="Cataract" className="service-image"  style={{ display: "block", margin: "20px auto", maxWidth: "80%", borderRadius: "10px" }} />
            <p>
              Clouding of the natural lens of the eye, leading to blurred
              vision. We provide advanced cataract surgery with modern lenses.
            </p>
          </div>

          <div className="service-card">
            <h2>Glaucoma</h2>
            <img src= "/assets/Glaucoma.jpg" alt="Glaucoma" className="service-image"  style={{ display: "block", margin: "20px auto", maxWidth: "80%", borderRadius: "10px" }} />
            <p>
              A group of diseases that damage the optic nerve, often due to high
              eye pressure. We offer early detection and treatment.
            </p>
          </div>

          <div className="service-card">
            <h2>Refractive Errors</h2>
            <img src= "/assets/Refractive Errors.jpg" alt="Refractive Errors" className="service-image"  style={{ display: "block", margin: "20px auto", maxWidth: "80%", borderRadius: "10px" }} />
            <p>
              Conditions like Myopia (Nearsightedness), Hyperopia
              (Farsightedness), and Astigmatism. LASIK and other solutions
              available.
            </p>
          </div>

          <div className="service-card">
            <h2>Diabetic Retinopathy</h2>
            <img src= "/assets/Diabetic Retinopathy.jpg" alt="Diabetic Retinopathy" className="service-image"  style={{ display: "block", margin: "20px auto", maxWidth: "80%", borderRadius: "10px" }} />
            <p>
              Eye damage caused by diabetes affecting the retina. We use
              advanced imaging and laser therapy for management.
            </p>
          </div>

          <div className="service-card">
            <h2>Macular Degeneration</h2>
            <img src= "/assets/Macular Degeneration.jpg" alt="Macular Degeneration" className="service-image"  style={{ display: "block", margin: "20px auto", maxWidth: "80%", borderRadius: "10px" }} />
            <p>
              A disease that affects the central part of the retina, leading to
              vision loss in older adults. Specialized treatment is provided.
            </p>
          </div>

          <div className="service-card">
            <h2>Keratoconus</h2>
            <img src= "/assets/Keratoconus.jpg" alt="Keratoconus" className="service-image"  style={{ display: "block", margin: "20px auto", maxWidth: "80%", borderRadius: "10px" }} />
            <p>
              A condition where the cornea becomes thin and cone-shaped,
              distorting vision. We provide corneal cross-linking and transplant
              options.
            </p>
          </div>

          <div className="service-card">
            <h2>Dry Eye Syndrome</h2>
            <img src= "/assets/Dry Eye Syndrome.jpg" alt="Dry Eye Syndrome" className="service-image"  style={{ display: "block", margin: "20px auto", maxWidth: "80%", borderRadius: "10px" }} />
            <p>
              When the eyes do not produce enough tears or tears evaporate too
              quickly. Treated with medication, therapy, and lifestyle changes.
            </p>
          </div>

          <div className="service-card">
            <h2>Conjunctivitis</h2>
            <img src= "/assets/Conjunctivitis.jpg" alt="Conjunctivitis" className="service-image"  style={{ display: "block", margin: "20px auto", maxWidth: "80%", borderRadius: "10px" }} />
            <p>
              Also known as “pink eye,” it is the inflammation of the
              conjunctiva, treated with proper medication and care.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Services;
