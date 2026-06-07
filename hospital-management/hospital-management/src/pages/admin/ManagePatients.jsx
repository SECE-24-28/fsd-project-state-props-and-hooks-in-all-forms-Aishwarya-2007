import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const Patients = () => {
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
                <button className="btn btn-primary btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Priya Sharma</td>
              <td>30</td>
              <td>Migraine</td>
              <td>Dr. Emily Carter</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Rahul Kumar</td>
              <td>52</td>
              <td>Diabetes</td>
              <td>Dr. Michael Smith</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>
    </AdminLayout>
  );
};

export default Patients;