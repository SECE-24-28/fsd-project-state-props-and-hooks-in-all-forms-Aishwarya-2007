import AdminLayout from "./AdminLayout";

function AdminProfile() {
  return (
    <AdminLayout>

      <div className="card shadow p-4">

        <div className="text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Admin"
            width="120"
            className="mb-3"
          />

          <h2>Administrator</h2>
          <p className="text-muted">
            Hospital Management System
          </p>

        </div>

        <hr />

        <div className="row">

          <div className="col-md-6">
            <p>
              <strong>Name:</strong> Admin User
            </p>

            <p>
              <strong>Email:</strong> admin@medicare.com
            </p>
          </div>

          <div className="col-md-6">
            <p>
              <strong>Phone:</strong> +91 9876543210
            </p>

            <p>
              <strong>Role:</strong> Super Admin
            </p>
          </div>

        </div>

        <button className="btn btn-primary mt-3">
          Edit Profile
        </button>

      </div>

    </AdminLayout>
  );
}

export default AdminProfile;