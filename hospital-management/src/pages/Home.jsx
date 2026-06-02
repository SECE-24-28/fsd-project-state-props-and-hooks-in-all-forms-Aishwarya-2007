import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/styles/Home.css";

import {
  FaUserMd,
  FaHeartbeat,
  FaAmbulance,
  FaHospital
} from "react-icons/fa";

function Home() {
  return (
    <>
      

      <section className="hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1>
                Your Health,
                <span className="text-primary">
                  {" "}Our Priority
                </span>
              </h1>

              <p>
                Providing world-class healthcare
                services with experienced doctors.
              </p>

              <button className="btn btn-primary me-3">
                Book Appointment
              </button>

              <button className="btn btn-outline-primary">
                View Doctors
              </button>

            </div>

            <div className="col-md-6">

              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
                alt="Hospital"
                className="img-fluid rounded shadow"
              />

            </div>

          </div>

        </div>

      </section>

      <section className="container py-5">

        <h2 className="section-title">
          Why Choose Us
        </h2>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="card feature-card p-4 text-center shadow">
              <FaUserMd size={40}/>
              <h5 className="mt-3">Expert Doctors</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card feature-card p-4 text-center shadow">
              <FaHeartbeat size={40}/>
              <h5 className="mt-3">Quality Care</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card feature-card p-4 text-center shadow">
              <FaAmbulance size={40}/>
              <h5 className="mt-3">24/7 Emergency</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card feature-card p-4 text-center shadow">
              <FaHospital size={40}/>
              <h5 className="mt-3">Modern Equipment</h5>
            </div>
          </div>

        </div>

      </section>

      
    </>
  );
}

export default Home;