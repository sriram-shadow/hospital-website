import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // import CSS

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      navigate("/admin");
    } else if (username === "user" && password === "user123") {
      navigate("/user");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Hospital Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>Use admin/admin123 or user/user123</p>
      </div>
    </div>
  );
}

export default Login;
