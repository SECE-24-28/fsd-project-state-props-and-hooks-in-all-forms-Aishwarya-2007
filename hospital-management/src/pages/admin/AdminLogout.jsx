import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();

    alert("Logged Out Successfully");

    navigate("/login");
  }, []);

  return null;
}

export default AdminLogout;