import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Signup.css";
import { Link } from "react-router-dom";

function Signup() {

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

  const handleSubmit = (e) => {
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
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Account Created Successfully");
    }
  };

  return (
    <>
      <Navbar />

      <section className="signup-section">

        <div className="signup-card">

          <h2 className="signup-title">
            Create Account
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.name}
            </small>

            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.email}
            </small>

            <input
              type="tel"
              name="phone"
              className="form-control mb-3"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.phone}
            </small>

            <input
              type="password"
              name="password"
              className="form-control mb-3"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.password}
            </small>

            <input
              type="password"
              name="confirmPassword"
              className="form-control mb-3"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.confirmPassword}
            </small>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-3">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Signup;