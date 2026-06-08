import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function AddPatient() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    disease: "",
    address: ""
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://medicalcare-backend-1.onrender.com/api/patients", patient);
      alert(res.data.message || "Patient Added Successfully!");
      navigate("/managepatients");
    } catch (error) {
      alert(error.response?.data?.message || "Error adding patient");
    }
  };

  return (
    <AdminLayout>

      <h2 className="mb-4">Add Patient</h2>

      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow"
      >

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={patient.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={patient.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
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

          <div className="col-md-6 mb-3">
            <label>Gender</label>
            <select
              name="gender"
              className="form-control"
              value={patient.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
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
          <label>Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={patient.address}
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