import AdminLayout from "./AdminLayout";

function ManageAppointments() {
  return (
    <AdminLayout>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Appointments</h2>

        <button className="btn btn-success">
          + Add Appointment
        </button>
      </div>

      <table className="table table-bordered table-hover shadow-sm">

        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Rahul Kumar</td>
            <td>Dr. Emily Carter</td>
            <td>05-06-2026</td>
            <td>10:00 AM</td>
            <td>
              <span className="badge bg-success">
                Confirmed
              </span>
            </td>
            <td>
              <button className="btn btn-primary btn-sm me-2">
                Edit
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Priya Sharma</td>
            <td>Dr. Michael Smith</td>
            <td>06-06-2026</td>
            <td>11:30 AM</td>
            <td>
              <span className="badge bg-warning text-dark">
                Pending
              </span>
            </td>
            <td>
              <button className="btn btn-primary btn-sm me-2">
                Edit
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Arjun Patel</td>
            <td>Dr. Sophia Brown</td>
            <td>07-06-2026</td>
            <td>03:00 PM</td>
            <td>
              <span className="badge bg-info">
                Completed
              </span>
            </td>
            <td>
              <button className="btn btn-primary btn-sm me-2">
                Edit
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>

        </tbody>

      </table>

    </AdminLayout>
  );
}

export default ManageAppointments;