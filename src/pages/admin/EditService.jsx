import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [service, setService] = useState({
    serviceName: "",
    department: "",
    price: "",
    description: ""
  });

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      const res = await axios.get(`https://medicalcare-backend-1.onrender.com/api/services/${id}`);
      setService(res.data.service);
    } catch (error) {
      alert("Error fetching service details");
    }
  };

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://medicalcare-backend-1.onrender.com/api/services/${id}`, service);
      alert("Service Updated Successfully!");
      navigate("/manageservices");
    } catch (error) {
      alert(error.response?.data?.message || "Error updating service");
    }
  };

  return (
    <AdminLayout>

      <h2 className="mb-4">Edit Service</h2>

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

        <div className="d-flex gap-2">
            <button
                type="submit"
                className="btn btn-primary"
            >
                Update Service
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/manageservices")}
            >
                Cancel
            </button>
        </div>

      </form>

    </AdminLayout>
  );
}

export default EditService;
