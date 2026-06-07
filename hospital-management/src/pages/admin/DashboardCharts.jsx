import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

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

function DashboardCharts() {
  const [stats, setStats] = useState({
    totalDoctors: 0,
    totalPatients: 0,
    totalAppointments: 0,
  });

  const fetchStats = async () => {
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
    fetchStats();
  }, []);

  const data = {
    labels: [
      "Doctors",
      "Patients",
      "Appointments",
    ],
    datasets: [
      {
        label: "Hospital Analytics",
        data: [
          stats.totalDoctors,
          stats.totalPatients,
          stats.totalAppointments,
        ],
      },
    ],
  };

  return (
    <AdminLayout>
      <div className="container">

        <h2 className="mb-4">
          Analytics Dashboard
        </h2>

        <div className="card p-4 shadow">
          <Bar data={data} />
        </div>

      </div>
    </AdminLayout>
  );
}

export default DashboardCharts;