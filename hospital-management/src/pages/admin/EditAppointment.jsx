import { useEffect, useState } from "react";
import axios from "axios";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import AdminLayout from "./AdminLayout";

function EditAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] =
    useState({
      patientName: "",
      doctorName: "",
      appointmentDate: "",
      appointmentTime: "",
      status: "",
    });

  useEffect(() => {
    fetchAppointment();
  }, []);

  const fetchAppointment = async () => {
    try {
      const res = await axios.get(
        `https://medicalcare-backend-1.onrender.com/api/appointments/${id}`
      );

      setAppointment(
        res.data.appointment
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://medicalcare-backend-1.onrender.com/api/appointments/${id}`,
        appointment
      );

      alert("Appointment Updated");

      navigate("/manageappointments");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <div className="container mt-4">

        <h2>Edit Appointment</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="patientName"
            value={appointment.patientName}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <input
            type="text"
            name="doctorName"
            value={appointment.doctorName}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <input
            type="date"
            name="appointmentDate"
            value={appointment.appointmentDate}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <input
            type="time"
            name="appointmentTime"
            value={appointment.appointmentTime}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <select
            name="status"
            value={appointment.status}
            onChange={handleChange}
            className="form-control mb-3"
          >
            <option value="Pending">
              Pending
            </option>

            <option value="Confirmed">
              Confirmed
            </option>

            <option value="Completed">
              Completed
            </option>
          </select>

          <button
            className="btn btn-primary"
            type="submit"
          >
            Update Appointment
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default EditAppointment;