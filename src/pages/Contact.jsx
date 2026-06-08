import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">
            We are here to help you 24/7.
          </p>
        </div>
      </section>

      <section className="container py-5">

        <div className="row g-4">

          <div className="col-md-4">
            <div className="contact-card">
              <h4>📍 Address</h4>
              <p>
                MediCare Hospital,
                Coimbatore, Tamil Nadu,
                India.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <h4>📞 Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <h4>✉ Email</h4>
              <p>info@medicarehospital.com</p>
            </div>
          </div>

        </div>

      </section>

      <section className="container pb-5">

        <div className="contact-form">

          <h3 className="mb-4">
            Send Us a Message
          </h3>


        <section className="container pb-5">

  <h3 className="mb-4">
    Find Us On Map
  </h3>

  

 

</section>
          <form>

            <div className="row">

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>

            </div>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Subject"
            />

            <textarea
              rows="5"
              className="form-control mb-3"
              placeholder="Message"
            ></textarea>

            <button
              className="btn btn-primary"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;