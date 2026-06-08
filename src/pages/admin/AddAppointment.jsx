import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function AddAppointment() {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
    appointmentTime: "",
    status: "Pending"
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://medicalcare-backend-1.onrender.com/api/appointments", appointment);
      alert(res.data.message || "Appointment Scheduled Successfully!");
      navigate("/manageappointments");
    } catch (error) {
      alert(error.response?.data?.message || "Error scheduling appointment");
    }
  };

  return (
    <AdminLayout>

      <h2 className="mb-4">Schedule Appointment</h2>

      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow"
      >

        <div className="mb-3">
          <label>Patient Name</label>
          <input
            type="text"
            name="patientName"
            className="form-control"
            value={appointment.patientName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Doctor Name</label>
          <input
            type="text"
            name="doctorName"
            className="form-control"
            value={appointment.doctorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Date</label>
            <input
              type="date"
              name="appointmentDate"
              className="form-control"
              value={appointment.appointmentDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Time</label>
            <input
              type="time"
              name="appointmentTime"
              className="form-control"
              value={appointment.appointmentTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label>Status</label>
          <select
            name="status"
            className="form-control"
            value={appointment.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-warning"
        >
          Schedule Appointment
        </button>

      </form>

    </AdminLayout>
  );
}

export default AddAppointment;
