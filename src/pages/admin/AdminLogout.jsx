import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogout() {

  const navigate = useNavigate();

  useEffect(() => {

    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminName");

    setTimeout(() => {
      navigate("/admin-login");
    }, 1000);

  }, [navigate]);

  return (
    <div className="container text-center mt-5">

      <h2>
        Logging Out...
      </h2>

      <p>
        Redirecting to Login Page
      </p>

    </div>
  );
}

export default AdminLogout;