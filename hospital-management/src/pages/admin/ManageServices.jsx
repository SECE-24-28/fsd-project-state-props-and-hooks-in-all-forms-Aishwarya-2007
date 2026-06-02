import AdminLayout from "./AdminLayout";

function ManageServices() {
  return (
    <AdminLayout>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Services</h2>

        <button className="btn btn-success">
          + Add Service
        </button>
      </div>

      <table className="table table-bordered table-hover shadow-sm">

        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Department</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Heart Checkup</td>
            <td>Cardiology</td>
            <td>₹2500</td>
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
            <td>General Consultation</td>
            <td>General Medicine</td>
            <td>₹500</td>
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
            <td>MRI Scan</td>
            <td>Radiology</td>
            <td>₹4500</td>
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
            <td>4</td>
            <td>Blood Test</td>
            <td>Laboratory</td>
            <td>₹800</td>
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

export default ManageServices;