import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function AddPatient() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    disease: "",
    address: "",
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
        "https://medicalcare-backend-1.onrender.com/api/patients",
        formData
      );

      alert("Patient Added Successfully");

      navigate("/managepatients");
    } catch (error) {
      console.log(error);

      alert("Failed To Add Patient");
    }
  };

  return (
    <AdminLayout>
      <div className="container mt-4">

        <h2 className="mb-4">
          Add Patient
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="number"
                name="age"
                placeholder="Age"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">

              <select
                name="gender"
                className="form-control"
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>
              </select>

            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="disease"
                placeholder="Disease"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-12 mb-3">
              <textarea
                name="address"
                placeholder="Address"
                className="form-control"
                rows="3"
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <button
            type="submit"
            className="btn btn-success"
          >
            Add Patient
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default AddPatient;