import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function ManageServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get("https://medicalcare-backend-1.onrender.com/api/services");
      setServices(res.data.services || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await axios.delete(`https://medicalcare-backend-1.onrender.com/api/services/${id}`);
        alert("Service deleted successfully");
        fetchServices();
      } catch (error) {
        alert(error,"Error deleting service");
      }
    }
  };

  return (
    <AdminLayout>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Services</h2>

        <Link to="/addservice" className="btn btn-success">
          + Add Service
        </Link>
      </div>

      <table className="table table-bordered table-hover shadow-sm">

        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Department</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr><td colSpan="5" className="text-center">Loading...</td></tr>
          ) : services.length === 0 ? (
            <tr><td colSpan="5" className="text-center">No services found</td></tr>
          ) : services.map((service) => (
            <tr key={service._id}>
              <td>{service._id.substring(0, 8)}...</td>
              <td>{service.serviceName}</td>
              <td>{service.department}</td>
              <td>₹{service.price}</td>
              <td>
                <Link 
                  to={`/editservice/${service._id}`} 
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>

                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </AdminLayout>
  );
}

export default ManageServices;