import { Link } from "react-router-dom";

function Navbar() {

  // Change to true after login
  const isLoggedIn = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          MediCare
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/doctors">
                Doctors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            {/* FAQ visible after login */}
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
            )}

            {/* Admin Panel */}
            <li className="nav-item ms-2">
              <Link
                className="btn btn-warning me-2"
                to="/admin-login"
              >
                Admin Panel
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-light me-2" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="btn btn-outline-light" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-light" to="/">
                  Logout
                </Link>
              </li>
            )}

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;