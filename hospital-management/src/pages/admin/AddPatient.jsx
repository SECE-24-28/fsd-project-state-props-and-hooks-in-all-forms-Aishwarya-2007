import { useState } from "react";
import AdminLayout from "./AdminLayout";

function AddPatient() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    disease: ""
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Patient Added Successfully!");

    setPatient({
      name: "",
      age: "",
      gender: "",
      phone: "",
      disease: ""
    });
  };

  return (
    <AdminLayout>

      <h2 className="mb-4">Add Patient</h2>

      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow"
      >

        <div className="mb-3">
          <label>Patient Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={patient.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={patient.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select
            name="gender"
            className="form-control"
            value={patient.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            value={patient.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Disease / Problem</label>
          <input
            type="text"
            name="disease"
            className="form-control"
            value={patient.disease}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success"
        >
          Add Patient
        </button>

      </form>

    </AdminLayout>
  );
}

export default AddPatient;