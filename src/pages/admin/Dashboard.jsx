import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/styles/Dashboard.css";
import { Link, Navigate } from "react-router-dom";

function Dashboard() {
  const [stats, setStats] = useState({
    totalDoctors: 0,
    totalPatients: 0,
    totalAppointments: 0,
    totalServices: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get("https://medicalcare-backend-1.onrender.com/api/dashboard");
      setStats({
        totalDoctors: res.data.totalDoctors,
        totalPatients: res.data.totalPatients,
        totalAppointments: res.data.totalAppointments,
        totalServices: 0,
        recentAppointments: res.data.recentAppointments || []
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const isAdminLoggedIn =
    localStorage.getItem("isAdminLoggedIn");

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin-login" />;
  }

  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        Admin Dashboard
      </h1>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="dashboard-card">
            <h2>{stats.totalDoctors}</h2>
            <p>Total Doctors</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card">
            <h2>{stats.totalPatients}</h2>
            <p>Total Patients</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card">
            <h2>{stats.totalAppointments}</h2>
            <p>Appointments</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card">
            <h2>{stats.totalServices || 5}</h2>
            <p>Services</p>
          </div>
        </div>

      </div>

      <div className="row mt-5">

        <div className="col-md-3 mb-3">
          <Link
            to="/managedoctors"
            className="btn btn-primary w-100"
          >
            Manage Doctors
          </Link>
        </div>

        <div className="col-md-3 mb-3">
          <Link
            to="/managepatients"
            className="btn btn-success w-100"
          >
            Manage Patients
          </Link>
        </div>

        <div className="col-md-3 mb-3">
          <Link
            to="/manageappointments"
            className="btn btn-warning w-100"
          >
            Manage Appointments
          </Link>
        </div>

        <div className="col-md-3 mb-3">
          <Link
            to="/manageservices"
            className="btn btn-info w-100"
          >
            Manage Services
          </Link>
        </div>

      </div>

      <div className="row mt-5">

        <div className="col-md-12">
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
                {stats.recentAppointments?.length === 0 ? (
                  <tr><td colSpan="3" className="text-center">No recent appointments</td></tr>
                ) : stats.recentAppointments?.map((apt) => (
                  <tr key={apt._id}>
                    <td>{apt.patientName}</td>
                    <td>{apt.doctorName}</td>
                    <td>
                      <span className={`badge ${apt.status === 'Confirmed' ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {apt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;