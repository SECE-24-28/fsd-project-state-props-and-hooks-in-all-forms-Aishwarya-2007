import { useEffect, useState } from "react";
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
    qualification: "",
  });

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    try {
      const res = await axios.get(
        `https://medicalcare-backend-1.onrender.com/api/doctors/${id}`
      );

      setDoctor(res.data.doctor);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch doctor");
    }
  };

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://medicalcare-backend-1.onrender.com/api/doctors/${id}`,
        doctor
      );

      alert("Doctor Updated Successfully");

      navigate("/managedoctors");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <AdminLayout>
      <div className="container mt-4">

        <h2>Edit Doctor</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="firstName"
            className="form-control mb-3"
            value={doctor.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            className="form-control mb-3"
            value={doctor.lastName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="specialization"
            className="form-control mb-3"
            value={doctor.specialization}
            onChange={handleChange}
          />

          <input
            type="number"
            name="experience"
            className="form-control mb-3"
            value={doctor.experience}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            className="form-control mb-3"
            value={doctor.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            className="form-control mb-3"
            value={doctor.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="qualification"
            className="form-control mb-3"
            value={doctor.qualification}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Update Doctor
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default EditDoctor;