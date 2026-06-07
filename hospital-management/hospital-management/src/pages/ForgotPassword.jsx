import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/ForgotPassword.css";

function ForgotPassword() {
  return (
    <>
      <Navbar />

      <section className="forgot-section">

        <div className="forgot-card">

          <h2 className="text-center mb-4">
            Forgot Password
          </h2>

          <p className="text-center text-muted">
            Enter your email to receive a reset link.
          </p>

          <form>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
            />

            <button
              className="btn btn-primary w-100"
            >
              Send Reset Link
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ForgotPassword;