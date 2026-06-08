import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/FAQ.css";

function FAQ() {
  return (
    <>
      <Navbar />

      <section className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="lead">
            Find answers to common questions about our hospital services.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">

          <div className="accordion" id="faqAccordion">

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  How do I book an appointment?
                </button>
              </h2>

              <div
                id="faq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Visit the Appointment page, choose a doctor,
                  select a date and time, and submit the form.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Can I cancel my appointment?
                </button>
              </h2>

              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes. You can contact the hospital reception
                  to cancel or reschedule your appointment.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Do you provide emergency services?
                </button>
              </h2>

              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, our emergency department operates 24/7.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                >
                  What are your working hours?
                </button>
              </h2>

              <div
                id="faq4"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  OP services are available from 8:00 AM to
                  8:00 PM. Emergency services are available
                  24 hours a day.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                >
                  How can I contact a doctor?
                </button>
              </h2>

              <div
                id="faq5"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can contact our reception team or book
                  an appointment through the website.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default FAQ;