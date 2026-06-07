import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function ManageAppointments() {
  const [appointments, setAppointments] =
    useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        "https://medicalcare-backend-1.onrender.com/api/appointments"
      );

      setAppointments(
        res.data.appointments
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const deleteAppointment = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this appointment?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://medicalcare-backend-1.onrender.com/api/appointments/${id}`
      );

      alert("Appointment Deleted Successfully");

      fetchAppointments();
    } catch (error) {
      console.log(error);
      alert("Failed to delete appointment");
    }
  };

  return (
    <AdminLayout>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Appointments</h2>

        <Link
          to="/addappointment"
          className="btn btn-success"
        >
          + Add Appointment
        </Link>
      </div>

      <table className="table table-bordered table-hover shadow-sm">

        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {appointments.length > 0 ? (
            appointments.map((app, index) => (
              <tr key={app._id}>

                <td>{index + 1}</td>

                <td>{app.patientName}</td>

                <td>{app.doctorName}</td>

                <td>{app.appointmentDate}</td>

                <td>{app.appointmentTime}</td>

                <td>
                  {app.status === "Confirmed" ? (
                    <span className="badge bg-success">
                      Confirmed
                    </span>
                  ) : app.status === "Completed" ? (
                    <span className="badge bg-info">
                      Completed
                    </span>
                  ) : (
                    <span className="badge bg-warning text-dark">
                      Pending
                    </span>
                  )}
                </td>

                <td>

                  <Link
                    to={`/editappointment/${app._id}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deleteAppointment(app._id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="text-center"
              >
                No Appointments Found
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </AdminLayout>
  );
}

export default ManageAppointments;