import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "./AdminLayout";

function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    specialization: "",
    experience: "",
    phone: "",
    email: "",
    qualification: ""
  });

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  const fetchDoctor = async () => {
    try {
      const res = await axios.get(`https://medicalcare-backend-1.onrender.com/api/doctors/${id}`);
      setDoctor(res.data.doctor);
    } catch (error) {
      alert("Error fetching doctor details");
    }
  };

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://medicalcare-backend-1.onrender.com/api/doctors/${id}`, doctor);
      alert("Doctor Updated Successfully!");
      navigate("/managedoctors");
    } catch (error) {
      alert(error.response?.data?.message || "Error updating doctor");
    }
  };

  return (
    <AdminLayout>

      <h2 className="mb-4">Edit Doctor</h2>

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
              value={doctor.firstName}
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
              value={doctor.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label>Qualification</label>
          <input
            type="text"
            name="qualification"
            className="form-control"
            value={doctor.qualification}
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
          <label>Experience (Years)</label>
          <input
            type="number"
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

        <div className="d-flex gap-2">
            <button
                type="submit"
                className="btn btn-primary"
            >
                Update Doctor
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/managedoctors")}
            >
                Cancel
            </button>
        </div>

      </form>

    </AdminLayout>
  );
}

export default EditDoctor;
