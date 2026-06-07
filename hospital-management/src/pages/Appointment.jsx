import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Appointment.css";

function Appointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://medicalcare-backend-1.onrender.com/api/appointments",
        formData
      );

      alert(res.data.message);

      setFormData({
        patientName: "",
        doctorName: "",
        appointmentDate: "",
        appointmentTime: "",
      });
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to Book Appointment"
      );
    }
  };

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

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <input
                    type="text"
                    name="patientName"
                    className="form-control"
                    placeholder="Patient Name"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="doctorName"
                    className="form-control"
                    placeholder="Doctor Name"
                    value={formData.doctorName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="date"
                    name="appointmentDate"
                    className="form-control"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="time"
                    name="appointmentTime"
                    className="form-control"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                  />
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