import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z ]{3,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Enter a valid name";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number and special character";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Split name into first and last name
        const nameParts = formData.name.trim().split(" ");
        const firstname = nameParts[0];
        const lastname = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "User";

        const res = await axios.post(
          "https://medicalcare-backend-1.onrender.com/api/auth/signup",
          {
            firstname: firstname,
            lastname: lastname,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            role: "patient" // Reverted to patient for public signup
          }
        );

        alert(res.data.message);

        // redirect to login
        navigate("/login");

      } catch (error) {
        alert(error.response?.data?.message || "Signup failed");
      }
    }
  };

  return (
    <>
      <Navbar />

      <section className="signup-section">

        <div className="signup-card">

          <h2>Create Account</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <small>{errors.name}</small>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <small>{errors.email}</small>

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <small>{errors.phone}</small>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <small>{errors.password}</small>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <small>{errors.confirmPassword}</small>

            <button type="submit">
              Create Account
            </button>

          </form>

          <p>
            Already have account? <Link to="/login">Login</Link>
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Signup;