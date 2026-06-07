import "../../assets/styles/AdminLogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {

      // Store login status
      localStorage.setItem("isAdminLoggedIn", "true");

      // Store admin name
      localStorage.setItem("adminName", username);

      alert("Login Successful!");

      navigate("/dashboard");

    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">

      <form
        className="login-box"
        onSubmit={handleLogin}
      >

        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;