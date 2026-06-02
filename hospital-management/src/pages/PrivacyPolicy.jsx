import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <section className="privacy-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="lead">
            Your privacy and data security are important to us.
          </p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">

          <div className="privacy-card">

            <h3>Information We Collect</h3>
            <p>
              We may collect personal information such as your name,
              email address, phone number, and appointment details.
            </p>

            <h3>How We Use Your Information</h3>
            <p>
              We use your information to manage appointments,
              improve patient care, and communicate important updates.
            </p>

            <h3>Data Security</h3>
            <p>
              We implement appropriate security measures to protect
              your personal information from unauthorized access.
            </p>

            <h3>Cookies</h3>
            <p>
              Our website may use cookies to improve user experience
              and website performance.
            </p>

            <h3>Third-Party Services</h3>
            <p>
              We may use trusted third-party services to support
              website functionality and healthcare operations.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions regarding this Privacy Policy,
              please contact our support team.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;