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
          eye conditions and diseases. Our expert ophthalmologists use
          state-of-the-art equipment to ensure the best outcomes for every patient.
        </p>

        <div className="service-grid">
          {/* --- Existing 8 Services --- */}
          <div className="service-card">
            <h2>Cataract</h2>
            <img src="/assets/Cataract.jpg" alt="Cataract" className="service-image" />
            <p>
              Clouding of the natural lens of the eye, leading to blurred vision.
              We provide advanced cataract surgery with modern lenses.
            </p>
          </div>

          <div className="service-card">
            <h2>Glaucoma</h2>
            <img src="/assets/Glaucoma.jpg" alt="Glaucoma" className="service-image" />
            <p>
              Damage to the optic nerve often due to high eye pressure. We offer
              early detection and specialized treatment plans.
            </p>
          </div>

          <div className="service-card">
            <h2>Refractive Errors</h2>
            <img src="/assets/Refractive Errors.jpg" alt="Refractive Errors" className="service-image" />
            <p>
              Includes Myopia, Hyperopia, and Astigmatism. We provide LASIK and
              other advanced corrective options.
            </p>
          </div>

          <div className="service-card">
            <h2>Diabetic Retinopathy</h2>
            <img src="/assets/Diabetic Retinopathy.jpg" alt="Diabetic Retinopathy" className="service-image" />
            <p>
              Diabetes-related eye damage treated using advanced imaging and
              laser therapy techniques.
            </p>
          </div>

          <div className="service-card">
            <h2>Macular Degeneration</h2>
            <img src="/assets/Macular Degeneration.jpg" alt="Macular Degeneration" className="service-image" />
            <p>
              Vision loss in older adults due to retinal deterioration.
              Comprehensive diagnosis and management available.
            </p>
          </div>

          <div className="service-card">
            <h2>Keratoconus</h2>
            <img src="/assets/Keratoconus.jpg" alt="Keratoconus" className="service-image" />
            <p>
              Corneal thinning and bulging treated through corneal
              cross-linking and transplantation.
            </p>
          </div>

          <div className="service-card">
            <h2>Dry Eye Syndrome</h2>
            <img src="/assets/Dry Eye Syndrome.jpg" alt="Dry Eye Syndrome" className="service-image" />
            <p>
              Inadequate tear production or fast evaporation treated with
              customized therapies and eye care plans.
            </p>
          </div>

          <div className="service-card">
            <h2>Conjunctivitis</h2>
            <img src="/assets/Conjunctivitis.jpg" alt="Conjunctivitis" className="service-image" />
            <p>
              Also known as “pink eye,” caused by infections or allergies.
              Treated with proper diagnosis and medication.
            </p>
          </div>

          {/* --- New 3 Services --- */}
          <div className="service-card">
            <h2>Retina Care</h2>
            <img src="/assets/Retina care.jpg" alt="Retina" className="service-image" />
            <p>
              Comprehensive care for retinal diseases, diabetic eye conditions,
              and macular disorders.
            </p>
          </div>

          <div className="service-card">
            <h2>Pediatric Ophthalmology</h2>
            <img src="/assets/pediatric.webp" alt="Pediatric" className="service-image" />
            <p>
              Eye care for children — early detection of visual problems and
              specialized treatments for healthy eye development.
            </p>
          </div>

          <div className="service-card">
            <h2>Cornea Clinic</h2>
            <img src="/assets/cornea.jpg" alt="Cornea" className="service-image" />
            <p>
              Treatment for corneal injuries, infections, and transplants using
              cutting-edge surgical methods.
            </p>
          </div>

          {/* --- 5 Added Services --- */}
          <div className="service-card">
            <h2>Laser Vision Correction (LASIK)</h2>
            <img src="/assets/lasik.webp" alt="LASIK" className="service-image" />
            <p>
              Modern laser procedures to correct nearsightedness, farsightedness,
              and astigmatism — for clear vision without glasses.
            </p>
          </div>

          <div className="service-card">
            <h2>Oculoplasty & Cosmetic Surgery</h2>
            <img src="/assets/oculoplasty.jpg" alt="Oculoplasty" className="service-image" />
            <p>
              Eyelid reconstruction, tear duct surgeries, and cosmetic
              enhancements performed by experts.
            </p>
          </div>

          <div className="service-card">
            <h2>Uveitis & Inflammation Treatment</h2>
            <img src="/assets/uveitis.jpeg" alt="Uveitis" className="service-image" />
            <p>
              Treatment for inflammation of the eye’s middle layer to prevent
              vision loss and chronic pain.
            </p>
          </div>

          <div className="service-card">
            <h2>Neuro-Ophthalmology</h2>
            <img src="/assets/neuro.jpg" alt="Neuro Ophthalmology" className="service-image" />
            <p>
              Specialized care for optic nerve and brain-related vision problems
              including double vision and nerve palsies.
            </p>
          </div>

          <div className="service-card">
            <h2>Vision Therapy & Rehabilitation</h2>
            <img src="/assets/vision.jpg" alt="Vision Therapy" className="service-image" />
            <p>
              Exercises and visual training for patients with lazy eye,
              binocular vision issues, or post-surgery recovery.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Services;
