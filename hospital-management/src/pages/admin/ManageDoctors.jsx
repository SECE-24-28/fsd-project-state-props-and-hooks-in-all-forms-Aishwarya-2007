import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function ManageDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(
        "https://medicalcare-backend-1.onrender.com/api/doctors"
      );

      setDoctors(res.data.doctors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const deleteDoctor = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this doctor?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://medicalcare-backend-1.onrender.com/api/doctors/${id}`
      );

      alert("Doctor Deleted Successfully");

      fetchDoctors();
    } catch (error) {
      console.log(error);
      alert("Failed to delete doctor");
    }
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      `${doctor.firstName} ${doctor.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="container-fluid">

        <div className="d-flex justify-content-between mb-3">
          <h2>Doctors Management</h2>

          <Link
            to="/adddoctor"
            className="btn btn-success"
          >
            + Add Doctor
          </Link>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Doctor..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <table className="table table-bordered table-hover">

          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Experience</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredDoctors.length > 0 ? (
              filteredDoctors.map(
                (doc, index) => (
                  <tr key={doc._id}>
                    <td>{index + 1}</td>

                    <td>
                      {doc.firstName}{" "}
                      {doc.lastName}
                    </td>

                    <td>
                      {doc.specialization}
                    </td>

                    <td>
                      {doc.experience} Years
                    </td>

                    <td>{doc.phone}</td>

                    <td>{doc.email}</td>

                    <td>

                      <Link
                        to={`/editdoctor/${doc._id}`}
                        className="btn btn-primary btn-sm me-2"
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          deleteDoctor(doc._id)
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
                  colSpan="7"
                  className="text-center"
                >
                  No Doctors Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>
    </AdminLayout>
  );
}

export default ManageDoctors;