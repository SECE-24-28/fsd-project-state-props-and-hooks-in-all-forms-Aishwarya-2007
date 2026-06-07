import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const ManagePatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get(
        "https://medicalcare-backend-1.onrender.com/api/patients"
      );

      setPatients(response.data.patients);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching patients:", error);
      setLoading(false);
    }
  };

  const deletePatient = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://medicalcare-backend-1.onrender.com/api/patients/${id}`
      );

      alert("Patient Deleted Successfully");

      fetchPatients();
    } catch (error) {
      console.log(error);
      alert("Failed To Delete Patient");
    }
  };

  const filteredPatients = patients.filter(
    (patient) =>
      `${patient.firstName} ${patient.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

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

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Patient..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        {loading ? (
          <h4>Loading Patients...</h4>
        ) : (
          <table className="table table-bordered table-hover shadow-sm">

            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Disease</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredPatients.length > 0 ? (
                filteredPatients.map(
                  (patient, index) => (
                    <tr key={patient._id}>
                      <td>{index + 1}</td>

                      <td>
                        {patient.firstName}{" "}
                        {patient.lastName}
                      </td>

                      <td>{patient.age}</td>

                      <td>{patient.gender}</td>

                      <td>{patient.phone}</td>

                      <td>{patient.disease}</td>

                      <td>{patient.address}</td>

                      <td>

                        <Link
                          to={`/editpatient/${patient._id}`}
                          className="btn btn-primary btn-sm me-2"
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            deletePatient(
                              patient._id
                            )
                          }
                        >
                          Delete
                        </button>

                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center"
                  >
                    No Patients Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>
        )}

      </div>
    </AdminLayout>
  );
};

export default ManagePatients;