import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function AddService() {
  const navigate = useNavigate();
  const [service, setService] = useState({
    serviceName: "",
    department: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://medicalcare-backend-1.onrender.com/api/services", service);
      alert(res.data.message || "Service Added Successfully!");
      navigate("/manageservices");
    } catch (error) {
      alert(error.response?.data?.message || "Error adding service");
    }
  };

  return (
    <AdminLayout>

      <h2 className="mb-4">Add New Service</h2>

      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow"
      >

        <div className="mb-3">
          <label>Service Name</label>
          <input
            type="text"
            name="serviceName"
            className="form-control"
            value={service.serviceName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            value={service.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={service.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            value={service.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Add Service
        </button>

      </form>

    </AdminLayout>
  );
}

export default AddService;
