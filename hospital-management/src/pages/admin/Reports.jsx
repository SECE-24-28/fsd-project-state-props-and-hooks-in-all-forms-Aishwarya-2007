import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import "../../assets/styles/Reports.css";

function Reports() {
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

  return (
    <AdminLayout>
      <div className="reports-container">

        <div className="reports-header">
          <h2>Hospital Reports</h2>

          <button
            className="print-btn"
            onClick={() => window.print()}
          >
            Print Report
          </button>
        </div>

        <div className="reports-grid">

          <div className="report-card">
            <h3>Total Doctors</h3>
            <p>{stats.totalDoctors}</p>
          </div>

          <div className="report-card">
            <h3>Total Patients</h3>
            <p>{stats.totalPatients}</p>
          </div>

          <div className="report-card">
            <h3>Total Appointments</h3>
            <p>{stats.totalAppointments}</p>
          </div>

        </div>

        <div className="report-summary">

          <h3>Hospital Summary</h3>

          <table>
            <tbody>

              <tr>
                <td>Total Doctors</td>
                <td>{stats.totalDoctors}</td>
              </tr>

              <tr>
                <td>Total Patients</td>
                <td>{stats.totalPatients}</td>
              </tr>

              <tr>
                <td>Total Appointments</td>
                <td>{stats.totalAppointments}</td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Reports;