import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  const isAdmin = localStorage.getItem("isAdminLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

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
            {isAdmin && (
              <li className="nav-item ms-2">
                <Link
                  className="btn btn-warning me-2"
                  to="/dashboard"
                >
                  Admin Panel
                </Link>
              </li>
            )}

            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-light me-2" to="/login">
                    Login
                  </Link>
                </li>

              </>
            ) : (
              <li className="nav-item">
                <button 
                  className="btn btn-light" 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;