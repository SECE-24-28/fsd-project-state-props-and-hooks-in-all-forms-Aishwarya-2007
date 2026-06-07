import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import "../../assets/styles/AdminProfile.css";

function AdminProfile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(
      sessionStorage.getItem("user")
    );

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    sessionStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Profile Updated Successfully");
    setEditMode(false);
  };

  if (!user) {
    return (
      <AdminLayout>
        <div className="profile-loading">
          Loading...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="profile-container">

        <div className="profile-card">

          <div className="profile-header">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="profile-image"
            />

            <h2>Admin Profile</h2>

          </div>

          <div className="profile-body">

            <div className="form-group">
              <label>First Name</label>

              <input
                type="text"
                name="firstname"
                value={user.firstname || ""}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>

              <input
                type="text"
                name="lastname"
                value={user.lastname || ""}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={user.email || ""}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={user.phone || ""}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            <div className="form-group">
              <label>Role</label>

              <input
                type="text"
                value={user.role || "Admin"}
                disabled
              />
            </div>

            <div className="profile-buttons">

              {!editMode ? (
                <button
                  className="edit-btn"
                  onClick={() =>
                    setEditMode(true)
                  }
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    className="save-btn"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>

                  <button
                    className="cancel-btn"
                    onClick={() =>
                      setEditMode(false)
                    }
                  >
                    Cancel
                  </button>
                </>
              )}

            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

export default AdminProfile;