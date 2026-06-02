import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Navbar />

      <section className="signup-section">

        <div className="signup-card">

          <h2 className="signup-title">
            Create Account
          </h2>

          <form>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
            />

            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Phone Number"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirm Password"
            />

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