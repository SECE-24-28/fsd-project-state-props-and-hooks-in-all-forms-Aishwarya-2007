import "../../assets/styles/AdminLogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminLogin() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // simple frontend authentication
    if (username === "admin" && password === "admin123") {

      // ✅ store login state (important for protected routes)
      localStorage.setItem("isAdminLoggedIn", "true");

      navigate("/dashboard");

    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">

      <form className="login-box" onSubmit={handleLogin}>

        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default AdminLogin;