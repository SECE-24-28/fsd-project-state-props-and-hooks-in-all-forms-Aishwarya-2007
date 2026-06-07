import "../../assets/styles/Dashboard.css";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const [stats, setStats] = useState({
    totalDoctors: 0,
    totalPatients: 0,
    totalAppointments: 0,
  });

  const fetchDashboardStats = async () => {
    try {
      const res = await axios.get(
        "https://medicalcare-backend-1.onrender.com/api/dashboard"
      );

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const chartData = {
    labels: [
      "Doctors",
      "Patients",
      "Appointments",
    ],

    datasets: [
      {
        label: "Hospital Statistics",

        data: [
          stats.totalDoctors,
          stats.totalPatients,
          stats.totalAppointments,
        ],
      },
    ],
  };

  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        Admin Dashboard
      </h1>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="dashboard-card">
            <h2>{stats.totalDoctors}</h2>
            <p>Total Doctors</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card">
            <h2>{stats.totalPatients}</h2>
            <p>Total Patients</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card">
            <h2>{stats.totalAppointments}</h2>
            <p>Total Appointments</p>
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

      </div>

      {/* Dashboard Chart */}

      <div className="card mt-5 p-4 shadow">

        <h3 className="mb-4">
          Hospital Analytics
        </h3>

        <Bar data={chartData} />

      </div>

    </div>
  );
}

export default Dashboard;