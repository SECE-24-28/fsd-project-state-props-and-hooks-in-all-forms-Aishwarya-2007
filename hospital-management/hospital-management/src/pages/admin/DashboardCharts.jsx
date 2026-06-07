import AdminLayout from "./AdminLayout";
import {
  Bar,
  Pie
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function DashboardCharts() {
  const patientData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Patients",
        data: [120, 190, 150, 220, 280]
      }
    ]
  };

  const appointmentData = {
    labels: [
      "Confirmed",
      "Pending",
      "Completed"
    ],
    datasets: [
      {
        data: [50, 20, 80]
      }
    ]
  };

  return (
    <AdminLayout>

      <h2 className="mb-4">
        Dashboard Analytics
      </h2>

      <div className="row">

        <div className="col-md-7">
          <div className="card p-3 shadow">
            <h5>Monthly Patients</h5>
            <Bar data={patientData} />
          </div>
        </div>

        <div className="col-md-5">
          <div className="card p-3 shadow">
            <h5>Appointments Status</h5>
            <Pie data={appointmentData} />
          </div>
        </div>

      </div>

    </AdminLayout>
  );
}

export default DashboardCharts;