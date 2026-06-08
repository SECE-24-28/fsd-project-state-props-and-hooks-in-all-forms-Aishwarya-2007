import AdminLayout from "./AdminLayout";

function Settings() {
  return (
    <AdminLayout>

      <h2 className="mb-4">
        Settings
      </h2>

      <div className="card shadow p-4">

        <h4 className="mb-4">
          Hospital Settings
        </h4>

        <div className="mb-3">
          <label className="form-label">
            Hospital Name
          </label>

          <input
            type="text"
            className="form-control"
            defaultValue="MediCare Hospital"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Hospital Email
          </label>

          <input
            type="email"
            className="form-control"
            defaultValue="admin@medicare.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Contact Number
          </label>

          <input
            type="text"
            className="form-control"
            defaultValue="+91 9876543210"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Address
          </label>

          <textarea
            className="form-control"
            rows="3"
            defaultValue="Coimbatore, Tamil Nadu"
          />
        </div>

        <button className="btn btn-primary">
          Save Settings
        </button>

      </div>

    </AdminLayout>
  );
}

export default Settings;