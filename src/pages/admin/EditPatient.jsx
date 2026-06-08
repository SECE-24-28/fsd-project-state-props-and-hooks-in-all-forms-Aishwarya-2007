import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function EditPatient() {
  const { id } = useParams();
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

  useEffect(() => {
    fetchPatient();
  }, [id]);

  const fetchPatient = async () => {
    try {
      const res = await axios.get(`https://medicalcare-backend-1.onrender.com/api/patients/${id}`);
      setPatient(res.data.patient);
    } catch (error) {
      alert("Error fetching patient details");
    }
  };

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://medicalcare-backend-1.onrender.com/api/patients/${id}`, patient);
      alert("Patient Updated Successfully!");
      navigate("/managepatients");
    } catch (error) {
      alert(error.response?.data?.message || "Error updating patient");
    }
  };

  return (
    <AdminLayout>

      <h2 className="mb-4">Edit Patient</h2>

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

        <div className="d-flex gap-2">
            <button
                type="submit"
                className="btn btn-primary"
            >
                Update Patient
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/managepatients")}
            >
                Cancel
            </button>
        </div>

      </form>

    </AdminLayout>
  );
}

export default EditPatient;
