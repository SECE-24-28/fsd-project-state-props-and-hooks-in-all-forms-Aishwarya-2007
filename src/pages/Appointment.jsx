import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Appointment.css";

function Appointment() {
  return (
    <>
      <Navbar />

      <section className="appointment-hero">
        <div className="container">
          <h1>Book an Appointment</h1>
          <p className="lead">
            Schedule your consultation with our specialists.
          </p>
        </div>
      </section>

      <section className="container py-5">

        <div className="row justify-content-center">

          <div className="col-md-8">

            <div className="appointment-form">

              <form>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Patient Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Age"
                    />
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <select className="form-select">
                      <option>Select Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedics</option>
                      <option>Pediatrics</option>
                      <option>Dermatology</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <select className="form-select">
                      <option>Select Doctor</option>
                      <option>Dr. Sarah Johnson</option>
                      <option>Dr. David Miller</option>
                      <option>Dr. Emily Wilson</option>
                      <option>Dr. Michael Brown</option>
                    </select>
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="date"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="time"
                      className="form-control"
                    />
                  </div>

                </div>

                <div className="mb-3">
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Reason for Visit"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Book Appointment
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Appointment;