import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Terms.css";

function Terms() {
  return (
    <>
      <Navbar />

      <section className="terms-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p className="lead">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">

          <div className="terms-card">

            <h3>Website Usage</h3>
            <p>
              By accessing our website, you agree to comply with
              all applicable laws and regulations.
            </p>

            <h3>Appointments</h3>
            <p>
              Appointment requests submitted through this website
              are subject to confirmation by the hospital.
            </p>

            <h3>User Responsibilities</h3>
            <p>
              Users must provide accurate information while
              registering and booking appointments.
            </p>

            <h3>Medical Disclaimer</h3>
            <p>
              Information provided on this website is for general
              informational purposes only and should not replace
              professional medical advice.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              The hospital shall not be responsible for any
              damages resulting from misuse of the website.
            </p>

            <h3>Changes to Terms</h3>
            <p>
              We reserve the right to update these terms at any
              time without prior notice.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Terms;