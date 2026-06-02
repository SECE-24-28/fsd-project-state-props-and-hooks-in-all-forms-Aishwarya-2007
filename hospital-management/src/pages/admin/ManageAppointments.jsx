import "../../assets/styles/ManageAppointments.css";

function ManageAppointments() {
  return (
    <div className="appointments-container">

      <h2 className="page-title">Manage Appointments</h2>

      <table className="appointments-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul</td>
            <td>Dr. Smith</td>
            <td>2026-06-01</td>
            <td>Pending</td>
            <td>
              <button className="approve-btn">Approve</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default ManageAppointments;