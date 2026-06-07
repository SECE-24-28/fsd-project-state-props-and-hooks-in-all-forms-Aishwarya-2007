import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function EditPatient() {
  const { id } = useParams();
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

  useEffect(() => {
    fetchPatient();
  }, []);

  const fetchPatient = async () => {
    try {
      const response = await axios.get(
        `https://medicalcare-backend-1.onrender.com/api/patients/${id}`
      );

      setFormData(response.data.patient);
    } catch (error) {
  console.log("FETCH ERROR:", error);
  console.log(error.response);

  alert(
    error.response?.data?.message ||
    error.message
  );
}
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://medicalcare-backend-1.onrender.com/api/patients/${id}`,
        formData
      );

      alert("Patient Updated Successfully");

      navigate("/managepatients");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <AdminLayout>
      <div className="container mt-4">

        <h2>Edit Patient</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="firstName"
            className="form-control mb-3"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            className="form-control mb-3"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            className="form-control mb-3"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />

          <select
            name="gender"
            className="form-control mb-3"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="text"
            name="phone"
            className="form-control mb-3"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="disease"
            className="form-control mb-3"
            placeholder="Disease"
            value={formData.disease}
            onChange={handleChange}
          />

          <textarea
            name="address"
            className="form-control mb-3"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Update Patient
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default EditPatient;