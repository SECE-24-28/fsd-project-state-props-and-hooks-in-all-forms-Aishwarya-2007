import { Link } from "react-router-dom";
import "../assets/styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Admin Panel</h2>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/managedoctors">
        Doctors
      </Link>

      <Link to="/managepatients">
        Patients
      </Link>

      <Link to="/manageappointments">
        Appointments
      </Link>

      <Link to="/manageservices">
        Services
      </Link>

      <Link to="/adminprofile">
        👤 Profile
      </Link>

      <Link to="/adminlogout">
        🚪 Logout
      </Link>

    </div>
  );
}

export default Sidebar;