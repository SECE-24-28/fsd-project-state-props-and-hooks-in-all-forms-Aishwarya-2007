import { useState } from "react";
import AdminLayout from "./AdminLayout";

function AddDoctor() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Doctor Added Successfully!");

    setDoctor({
      name: "",
      specialization: "",
      experience: "",
      phone: "",
      email: ""
    });
  };

  return (
    <AdminLayout>

      <h2 className="mb-4">Add Doctor</h2>

      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow"
      >

        <div className="mb-3">
          <label>Doctor Name</label>

          <input
            type="text"
            name="name"
            className="form-control"
            value={doctor.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Specialization</label>

          <input
            type="text"
            name="specialization"
            className="form-control"
            value={doctor.specialization}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Experience</label>

          <input
            type="text"
            name="experience"
            className="form-control"
            value={doctor.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>

          <input
            type="tel"
            name="phone"
            className="form-control"
            value={doctor.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>

          <input
            type="email"
            name="email"
            className="form-control"
            value={doctor.email}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success"
        >
          Add Doctor
        </button>

      </form>

    </AdminLayout>
  );
}

export default AddDoctor;