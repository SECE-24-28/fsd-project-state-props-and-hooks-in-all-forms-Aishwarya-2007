import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function AddAppointment() {
  const navigate = useNavigate();

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
      await axios.post(
        "https://medicalcare-backend-1.onrender.com/api/appointments",
        formData
      );

      alert("Appointment Booked");

      navigate("/manageappointments");
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };

  return (
    <AdminLayout>
      <div className="container mt-4">
        <h2>Add Appointment</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="doctorName"
            placeholder="Doctor Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="date"
            name="appointmentDate"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="time"
            name="appointmentTime"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button
            className="btn btn-primary"
            type="submit"
          >
            Book Appointment
          </button>

        </form>
      </div>
    </AdminLayout>
  );
}

export default AddAppointment;