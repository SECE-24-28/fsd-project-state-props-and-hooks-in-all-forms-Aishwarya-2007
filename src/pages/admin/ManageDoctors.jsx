import { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/styles/ManageDoctors.css";
import { Link } from "react-router-dom";

function ManageDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get("https://medicalcare-backend-1.onrender.com/api/doctors");
      setDoctors(res.data.doctors || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      try {
        await axios.delete(`https://medicalcare-backend-1.onrender.com/api/doctors/${id}`);
        alert("Doctor deleted successfully");
        fetchDoctors();
      } catch (error) {
        alert("Error deleting doctor");
      }
    }
  };

  return (
    <div className="manage-container">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Doctors</h2>

        <Link
  to="/add-doctor"
  className="btn btn-success"
>
  + Add Doctor
</Link>
      </div>

      <table className="table table-bordered table-hover bg-white">

        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr><td colSpan="4" className="text-center">Loading...</td></tr>
          ) : doctors.length === 0 ? (
            <tr><td colSpan="4" className="text-center">No doctors found</td></tr>
          ) : doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td>{doctor._id.substring(0, 8)}...</td>
              <td>{doctor.firstName} {doctor.lastName}</td>
              <td>{doctor.specialization}</td>
              <td>
                <Link 
                  to={`/editdoctor/${doctor._id}`} 
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(doctor._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ManageDoctors;