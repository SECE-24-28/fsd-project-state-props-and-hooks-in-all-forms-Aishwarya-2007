import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("https://medicalcare-backend-1.onrender.com/api/appointments");
      setAppointments(res.data.appointments || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        await axios.delete(`https://medicalcare-backend-1.onrender.com/api/appointments/${id}`);
        alert("Appointment deleted successfully");
        fetchAppointments();
      } catch (error) {
        alert("Error deleting appointment");
      }
    }
  };

  return (
    <AdminLayout>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Appointments</h2>

        <Link to="/addappointment" className="btn btn-success">
          + Add Appointment
        </Link>
      </div>

      <table className="table table-bordered table-hover shadow-sm">

        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr><td colSpan="7" className="text-center">Loading...</td></tr>
          ) : appointments.length === 0 ? (
            <tr><td colSpan="7" className="text-center">No appointments found</td></tr>
          ) : appointments.map((apt) => (
            <tr key={apt._id}>
              <td>{apt._id.substring(0, 8)}...</td>
              <td>{apt.patientName}</td>
              <td>{apt.doctorName}</td>
              <td>{apt.appointmentDate}</td>
              <td>{apt.appointmentTime}</td>
              <td>
                <span className={`badge ${apt.status === 'Confirmed' ? 'bg-success' : apt.status === 'Pending' ? 'bg-warning text-dark' : 'bg-info'}`}>
                  {apt.status}
                </span>
              </td>
              <td>
                <button className="btn btn-primary btn-sm me-2">
                  Edit
                </button>

                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(apt._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </AdminLayout>
  );
}

export default ManageAppointments;