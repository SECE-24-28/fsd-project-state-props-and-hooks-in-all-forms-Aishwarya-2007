import React, { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [editingId, setEditingId] = useState(null);

  const API = "https://medicalcare-backend-1.onrender.com/api/services";

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(API);
      setServices(res.data);
    } catch (error) {
      console.log(error);
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

      fetchServices();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (service) => {
    setName(service.name);
    setDescription(service.description);
    setPrice(service.price);
    setEditingId(service._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this service?")) {
      await axios.delete(`${API}/${id}`);

      fetchServices();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hospital Services</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">
          {editingId ? "Update Service" : "Add Service"}
        </button>
      </form>

      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Service</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>₹{service.price}</td>

              <td>
                <button
                  onClick={() => handleEdit(service)}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(service._id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;