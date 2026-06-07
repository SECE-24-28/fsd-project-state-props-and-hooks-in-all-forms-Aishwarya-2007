import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Services.css";

import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaTooth,
  FaChild,
  FaAmbulance
} from "react-icons/fa";

function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Medical Services</h1>
          <p className="lead">
            Comprehensive healthcare services for you and your family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-5">

        <div className="row g-4">

          <div className="col-md-4">
            <div className="service-card">
              <FaHeartbeat className="service-icon"/>
              <h4>Cardiology</h4>
              <p>
                Heart care, diagnosis and treatment from expert cardiologists.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <FaBrain className="service-icon"/>
              <h4>Neurology</h4>
              <p>
                Advanced treatment for brain and nervous system disorders.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <FaBone className="service-icon"/>
              <h4>Orthopedics</h4>
              <p>
                Specialized care for bones, joints, and muscles.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <FaChild className="service-icon"/>
              <h4>Pediatrics</h4>
              <p>
                Dedicated healthcare services for infants and children.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <FaTooth className="service-icon"/>
              <h4>Dental Care</h4>
              <p>
                Complete oral healthcare and dental treatments.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <FaAmbulance className="service-icon"/>
              <h4>Emergency Care</h4>
              <p>
                24/7 emergency services with rapid response teams.
              </p>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Services;