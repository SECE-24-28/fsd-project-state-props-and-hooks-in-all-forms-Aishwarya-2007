import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css";


import D1 from "../assets/images/D1.png";
import D2 from "../assets/images/D2.png";
import D3 from "../assets/images/D3.png";
import D4 from "../assets/images/D4.png";
import D5 from "../assets/images/D5.png";
import D6 from "../assets/images/D6.png";

import {
  FaUserMd,
  FaHeartbeat,
  FaAmbulance,
  FaHospital
} from "react-icons/fa";



function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">

            <h1>YOUR HEALTH, OUR PRIORITY</h1>

            <p>
              Providing world-class healthcare with expert doctors,
              advanced technology, and compassionate care.
            </p>

            <div className="hero-buttons">

              <Link
                to="/appointment"
                className="btn btn-light"
              >
                Request Appointment
              </Link>

              <Link
                to="/doctors"
                className="btn btn-outline-light"
              >
                Find Doctors
              </Link>

              <Link
                to="/contact"
                className="btn btn-warning"
              >
                Emergency Care
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats-section">

        <h3>Our Key Statistics</h3>

        <div className="stats-container">

          <div>
            <h2>25+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2>50K+</h2>
            <p>Patients Treated</p>
          </div>

          <div>
            <h2>98%</h2>
            <p>Success Rate</p>
          </div>

          <div>
            <h2>20+</h2>
            <p>Departments</p>
          </div>

        </div>

      </section>

      {/* ABOUT US */}
      <section className="about-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                alt="Hospital"
                className="img-fluid rounded"
              />

            </div>

            <div className="col-md-6">

              <h2>About Us</h2>

              <p>
                MediCare Hospital is dedicated to delivering
                exceptional healthcare services with cutting-edge
                technology and highly experienced medical professionals.
              </p>

              <p>
                Our mission is to provide patient-centered care
                and ensure the well-being of every individual.
              </p>

              <Link
                to="/appointment"
                className="btn btn-primary"
              >
                Book Appointment
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CENTER OF EXCELLENCE */}
      <section className="services-section">

        <div className="container">

          <h2>Center Of Excellence</h2>

          <div className="services-grid">

            <div className="service-card">
              <h4>Cardiology</h4>
              <p>Heart and vascular treatments.</p>
            </div>

            <div className="service-card">
              <h4>Gynaecology</h4>
              <p>Women's healthcare services.</p>
            </div>

            <div className="service-card">
              <h4>Emergency Medicine</h4>
              <p>24/7 emergency treatment.</p>
            </div>

            <div className="service-card">
              <h4>NICU</h4>
              <p>Advanced neonatal care.</p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">

        <div className="container">

          <h2>Why Choose Us?</h2>

          <div className="why-grid">

            <div className="why-card">
              <h5>Patient-Centered Care</h5>
              <p>
                Personalized treatment plans for every patient.
              </p>
            </div>

            <div className="why-card">
              <h5>Safe & Hygienic Environment</h5>
              <p>
                Highest standards of cleanliness and safety.
              </p>
            </div>

            <div className="why-card">
              <h5>24/7 Emergency Care</h5>
              <p>
                Immediate medical attention anytime.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* APPOINTMENT SECTION */}
      <section className="appointment-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                alt="Doctor"
                className="img-fluid rounded"
              />

            </div>

            <div className="col-md-6">

              <h2>Book Appointment</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Request Submitted Successfully!");
                }}
              >

                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control mb-3"
                />

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="form-control mb-3"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3"
                />

                <input
                  type="number"
                  placeholder="Age"
                  className="form-control mb-3"
                />

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Request A Call
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      <section className="doctors-section">

  <div className="container">

    <h2>Our Expert Doctors</h2>

    <div className="doctors-grid">

      {[
        [D1, "Dr. Emily Carter", "Cardiologist"],
        [D2, "Dr. Michael Smith", "Neurologist"],
        [D3, "Dr. Olivia Wilson", "Pediatrician"],
        [D4, "Dr. James Anderson", "Orthopedic Surgeon"],
        [D5, "Dr. Sophia Brown", "Dermatologist"],
        [D6, "Dr. William Taylor", "General Physician"]
      ].map((doctor, index) => (
        <div className="doctor-card" key={index}>

          <img src={doctor[0]} alt={doctor[1]} />

          <h4>{doctor[1]}</h4>

          <p>{doctor[2]}</p>

          <Link
            to="/appointment"
            className="btn btn-primary"
          >
            Book Appointment
          </Link>

        </div>
      ))}

    </div>

  </div>

</section>



<section className="facilities">

  <div className="container">

    <h2 className="text-center">
      Our Facilities
    </h2>

    <div className="facilities-grid">

      <div className="facility-card">
        🏥 ICU
      </div>

      <div className="facility-card">
        🚑 Ambulance
      </div>

      <div className="facility-card">
        💊 Pharmacy
      </div>

      <div className="facility-card">
        🩺 Diagnostic Lab
      </div>

      <div className="facility-card">
        🦷 Dental Care
      </div>

      <div className="facility-card">
        🧠 MRI Scan
      </div>

    </div>

  </div>

</section>




<section className="testimonials">

  <div className="container">

    <h2 className="text-center">
      Patient Testimonials
    </h2>

    <div className="testimonial-grid">

      <div className="testimonial-card">
        <h5>★★★★★</h5>

        <p>
          The doctors were professional and caring.
          Highly recommended.
        </p>

        <strong>- Priya S.</strong>
      </div>

      <div className="testimonial-card">
        <h5>★★★★★</h5>

        <p>
          Excellent facilities and very supportive staff.
        </p>

        <strong>- Rahul K.</strong>
      </div>

      <div className="testimonial-card">
        <h5>★★★★★</h5>

        <p>
          Best healthcare experience for my family.
        </p>

        <strong>- Arjun M.</strong>
      </div>

    </div>

  </div>

</section>


<section className="emergency-banner">

  <h2>
    Need Immediate Medical Assistance?
  </h2>

  <p>
    Emergency Helpline Available 24/7
  </p>

  <h3>
    +91 98765 43210
  </h3>

  <Link
    to="/contact"
    className="btn btn-light"
  >
    Contact Emergency Team
  </Link>

</section>





      <Footer />
    </>
  );
}

export default Home;