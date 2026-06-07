import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = {};

  if (!emailRegex.test(email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (!password) {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      const response = await axios.post(
        "https://medicalcare-backend-1.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      sessionStorage.setItem(
        "token",
        response.data.token
      );

      sessionStorage.setItem(
        "role",
        response.data.user.role
      );

      sessionStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  }
};

  return (
    <>
      <Navbar />

      <section className="login-section">
        <div className="login-card">

          <h2 className="login-title">
            Login
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {errors.email && (
              <small className="text-danger">
                {errors.email}
              </small>
            )}

            <input
              type="password"
              className="form-control mt-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errors.password && (
              <small className="text-danger">
                {errors.password}
              </small>
            )}

            <div className="form-check mb-3 mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />

              <label
                className="form-check-label"
                htmlFor="remember"
              >
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>

          </form>

          <div className="login-links">

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

            <Link to="/signup">
              Create Account
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;