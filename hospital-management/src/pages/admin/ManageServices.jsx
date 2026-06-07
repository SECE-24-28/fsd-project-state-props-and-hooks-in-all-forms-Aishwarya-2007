import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import "../../assets/styles/ManageServices.css";

function ManageServices() {
  const [services, setServices] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const API = "https://medicalcare-backend-1.onrender.com/api/services";

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(API);
      setServices(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, {
          name,
          description,
          price,
        });

        alert("Service Updated Successfully");
      } else {
        await axios.post(API, {
          name,
          description,
          price,
        });

        alert("Service Added Successfully");
      }

      setName("");
      setDescription("");
      setPrice("");
      setEditingId(null);
      setShowForm(false);

      fetchServices();
    } catch (err) {
      console.log(err);
      alert("Operation Failed");
    }
  };

  const handleEdit = (service) => {
    setName(service.name);
    setDescription(service.description);
    setPrice(service.price);
    setEditingId(service._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/${id}`);
      fetchServices();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <div className="services-container">

        <div className="services-header">
          <h2>Manage Services</h2>

          <button
            className="add-btn"
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
              setName("");
              setDescription("");
              setPrice("");
            }}
          >
            + Add Service
          </button>
        </div>

        {showForm && (
          <form className="service-form" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Service Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <div className="form-buttons">
              <button type="submit" className="save-btn">
                {editingId ? "Update Service" : "Save Service"}
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <table className="services-table">

          <thead>
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service, index) => (
              <tr key={service._id}>
                <td>{index + 1}</td>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>₹{service.price}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(service)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(service._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </AdminLayout>
  );
}

export default ManageServices;