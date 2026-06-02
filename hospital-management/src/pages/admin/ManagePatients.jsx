import React from "react";
import { Link } from "react-router-dom";

const Patients = () => {
  return (
    <div className="container mt-4">
      <h2>Patients Management</h2>

      <div className="d-flex justify-content-between align-items-center my-3">
        <h5>All Patients</h5>
        <Link to="/add-patient" className="btn btn-success">
          + Add Patient
        </Link>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>45</td>
            <td>Fever</td>
            <td>Dr. Mehta</td>
            <td>
              <button className="btn btn-primary btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Patients;