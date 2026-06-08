import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/About.css";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Hospital</h1>
          <p className="lead">
            Providing quality healthcare with compassion and excellence.
          </p>
        </div>
      </section>

      {/* Hospital Introduction */}
      <section className="about-section">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
                alt="Hospital"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-md-6">
              <h2>Who We Are</h2>

              <p>
                MediCare Hospital is a modern healthcare institution
                committed to delivering high-quality medical services.
                Our team of experienced doctors, nurses, and healthcare
                professionals work together to ensure the best care
                for every patient.
              </p>

              <p>
                We combine advanced medical technology with
                compassionate patient care to create a trusted
                healthcare environment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-5">

        <div className="row g-4">

          <div className="col-md-6">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To provide accessible, affordable, and quality
                healthcare services while maintaining the highest
                standards of medical excellence.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To become the most trusted healthcare provider,
                recognized for innovation, patient satisfaction,
                and exceptional medical care.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="container py-5">

        <h2 className="text-center mb-5">
          Our Achievements
        </h2>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="stat-box">
              <h2>50+</h2>
              <p>Doctors</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-box">
              <h2>10,000+</h2>
              <p>Patients Treated</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-box">
              <h2>15+</h2>
              <p>Departments</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-box">
              <h2>24/7</h2>
              <p>Emergency Care</p>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;