import AdminLayout from "./AdminLayout";

function Reports() {
  return (
    <AdminLayout>

      <h2 className="mb-4">
        Hospital Reports
      </h2>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow p-4 text-center">
            <h3>250</h3>
            <p>Total Patients</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow p-4 text-center">
            <h3>120</h3>
            <p>Total Appointments</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow p-4 text-center">
            <h3>10</h3>
            <p>Total Doctors</p>
          </div>
        </div>

      </div>

      <div className="card shadow p-4">

        <h4>Monthly Report</h4>

        <table className="table table-bordered mt-3">

          <thead className="table-primary">
            <tr>
              <th>Month</th>
              <th>Patients</th>
              <th>Appointments</th>
              <th>Revenue</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>January</td>
              <td>120</td>
              <td>80</td>
              <td>₹1,20,000</td>
            </tr>

            <tr>
              <td>February</td>
              <td>150</td>
              <td>100</td>
              <td>₹1,50,000</td>
            </tr>

            <tr>
              <td>March</td>
              <td>180</td>
              <td>140</td>
              <td>₹2,10,000</td>
            </tr>
          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default Reports;