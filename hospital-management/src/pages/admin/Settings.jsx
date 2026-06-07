import { useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

function Settings() {
  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      console.log({
        email: "aishwarya200710@gmail.com",
        currentPassword,
        newPassword,
      });

      const res = await axios.put(
        "https://medicalcare-backend-1.onrender.com/api/auth/change-password",
        {
          email: "aishwarya200710@gmail.com",
          currentPassword,
          newPassword,
        }
      );

      alert(res.data.message);

      setCurrentPassword("");
      setNewPassword("");

    } catch (error) {
      console.log("Error:", error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Failed to change password"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="container">

        <h2 className="mb-4">
          Settings
        </h2>

        <div className="card shadow p-4">

          <h4 className="mb-3">
            Change Password
          </h4>

          <form onSubmit={handleChangePassword}>

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) =>
                setCurrentPassword(e.target.value)
              }
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(e.target.value)
              }
              required
            />

            <button
              type="submit"
              className="btn btn-primary"
            >
              Change Password
            </button>

          </form>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Settings;