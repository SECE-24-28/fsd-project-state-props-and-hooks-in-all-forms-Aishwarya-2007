import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function AddDoctor() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    specialization: "",
    experience: "",
    phone: "",
    email: "",
    qualification: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://medicalcare-backend-1.onrender.com/api/doctors",
        formData
      );

      alert("Doctor Added Successfully");
      navigate("/managedoctors");
    } catch (error) {
      console.log(error);
      alert("Failed to add doctor");
    }
  };

  return (
    <AdminLayout>
      <div className="container mt-4">
        <h2>Add Doctor</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <input
            name="lastName"
            placeholder="Last Name"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <input
            name="specialization"
            placeholder="Specialization"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <input
            name="experience"
            type="number"
            placeholder="Experience (years)"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <input
            name="qualification"
            placeholder="Qualification"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <button className="btn btn-success">
            Add Doctor
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddDoctor;