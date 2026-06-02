import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Navbar />

      <section className="login-section">
        <div className="login-card">

          <h2 className="login-title">
            Login
          </h2>

          <form>

            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
            />

            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />

            <div className="form-check mb-3">
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