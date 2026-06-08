import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          minHeight: "100vh",
          background: "#0d6efd",
          color: "white",
          padding: "20px"
        }}
      >
        <h3>MediCare Admin</h3>

        <hr />

        <ul className="list-unstyled">

          <li className="mb-3">
            <Link
              to="/dashboard"
              className="text-white text-decoration-none"
            >
              Dashboard
            </Link>
          </li>

          <li className="mb-3">
            <Link
              to="/managedoctors"
              className="text-white text-decoration-none"
            >
              Manage Doctors
            </Link>
          </li>

         <li className="mb-3">
  <Link
    to="/managepatients"
    className="text-white text-decoration-none"
  >
    Manage Patients
  </Link>
</li>
          <li className="mb-3">
            <Link
              to="/manageappointments"
              className="text-white text-decoration-none"
            >
              Appointments
            </Link>
          </li>

          <li className="mb-3">
            <Link
              to="/manageservices"
              className="text-white text-decoration-none"
            >
              Services
            </Link>
          </li>


<li className="mb-3">
  <Link
    to="/adminprofile"
    className="text-white text-decoration-none"
  >
    Admin Profile
  </Link>
</li>

<li className="mb-3">
  <Link
    to="/dashboardcharts"
    className="text-white text-decoration-none"
  >
    Analytics
  </Link>
</li>


<li className="mb-3">
  <Link
    to="/reports"
    className="text-white text-decoration-none"
  >
    Reports
  </Link>
</li>

<li className="mb-3">
  <Link
    to="/settings"
    className="text-white text-decoration-none"
  >
    Settings
  </Link>
</li>

<li className="mb-3">
  <Link
    to="/adminlogout"
    className="text-white text-decoration-none"
  >
    Logout
  </Link>
</li>
        </ul>

      </div>

      {/* Main Content */}
      <div className="p-4 w-100">
        {children}
      </div>

    </div>
  );
}

export default AdminLayout;