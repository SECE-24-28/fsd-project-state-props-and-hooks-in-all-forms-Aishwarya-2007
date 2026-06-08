import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get("https://medicalcare-backend-1.onrender.com/api/patients");
      setPatients(res.data.patients || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching patients:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      try {
        await axios.delete(`https://medicalcare-backend-1.onrender.com/api/patients/${id}`);
        alert("Patient deleted successfully");
        fetchPatients();
      } catch (error) {
        alert("Error deleting patient");
      }
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Patients Management</h2>

          <Link
            to="/addpatient"
            className="btn btn-success"
          >
            + Add Patient
          </Link>
        </div>

        <table className="table table-bordered table-hover shadow-sm">

          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Disease</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr><td colSpan="5" className="text-center">Loading...</td></tr>
            ) : patients.length === 0 ? (
              <tr><td colSpan="5" className="text-center">No patients found</td></tr>
            ) : patients.map((patient) => (
              <tr key={patient._id}>
                <td>{patient._id.substring(0, 8)}...</td>
                <td>{patient.firstName} {patient.lastName}</td>
                <td>{patient.age}</td>
                <td>{patient.disease}</td>
                <td>
                  <Link 
                    to={`/editpatient/${patient._id}`} 
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </Link>

                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(patient._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </AdminLayout>
  );
};

export default Patients;