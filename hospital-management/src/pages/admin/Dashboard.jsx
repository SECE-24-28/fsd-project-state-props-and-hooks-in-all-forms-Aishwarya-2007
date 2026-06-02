import "../../assets/styles/Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">

      {/* Title */}
      <h1 className="dashboard-title">
        Admin Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="row g-4">

        <div className="col-md-3">
          <div className="dashboard-card">
            <h2>10</h2>
            <p>Total Doctors</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card">
            <h2>250</h2>
            <p>Total Patients</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card">
            <h2>120</h2>
            <p>Appointments</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card">
            <h2>8</h2>
            <p>Services</p>
          </div>
        </div>

      </div>

      {/* Admin Actions */}
      <div className="row mt-5">

        <div className="col-md-3 mb-3">
          <Link to="/doctors" className="btn btn-primary w-100">
            Manage Doctors
          </Link>
        </div>

        <div className="col-md-3 mb-3">
          <Link to="/patients" className="btn btn-success w-100">
            Manage Patients
          </Link>
        </div>

        <div className="col-md-3 mb-3">
          <Link to="/appointments" className="btn btn-warning w-100">
            Manage Appointments
          </Link>
        </div>

        <div className="col-md-3 mb-3">
          <Link to="/services" className="btn btn-info w-100">
            Manage Services
          </Link>
        </div>

      </div>

      {/* Recent Appointments + Summary */}
      <div className="row mt-5">

        {/* Recent Appointments */}
        <div className="col-md-6">
          <div className="dashboard-card">

            <h4>Recent Appointments</h4>

            <table className="table mt-3">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Rahul</td>
                  <td>Dr. Emily Carter</td>
                  <td>Confirmed</td>
                </tr>

                <tr>
                  <td>Priya</td>
                  <td>Dr. Michael Smith</td>
                  <td>Pending</td>
                </tr>

                <tr>
                  <td>Arjun</td>
                  <td>Dr. Olivia Wilson</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* Hospital Summary */}
        <div className="col-md-6">
          <div className="dashboard-card">

            <h4>Hospital Summary</h4>

            <ul className="list-group mt-3">

              <li className="list-group-item">
                Emergency Cases Today: 15
              </li>

              <li className="list-group-item">
                Available Doctors: 10
              </li>

              <li className="list-group-item">
                Beds Available: 42
              </li>

              <li className="list-group-item">
                ICU Occupancy: 80%
              </li>

            </ul>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;