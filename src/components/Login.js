import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [role, setRole] = useState("user"); // new toggle for role
  const navigate = useNavigate();

  // ---- LOGIN ----
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });
      const data = await res.text();
      alert(data);

      if (data === "Login successful!") {
        if (role === "admin") navigate("/admin");
        else navigate("/user");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again!");
    }
  };

  // ---- REGISTER ----
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: registerEmail, password: registerPassword }),
      });
      const data = await res.text();
      alert(data);
      setIsRegister(false);
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (err) {
      console.error(err);
      alert("Server error. Try again!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {!isRegister ? (
          <>
            <h2>Hospital Login</h2>

            {/* Toggle for User / Admin */}
            <div className="role-toggle">
              <button
                type="button"
                className={role === "user" ? "active" : ""}
                onClick={() => setRole("user")}
              >
                User
              </button>
              <button
                type="button"
                className={role === "admin" ? "active" : ""}
                onClick={() => setRole("admin")}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Enter Email"
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

            <p
              onClick={() => setIsRegister(true)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Don't have an account? Register here
            </p>
          </>
        ) : (
          <>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <input
                type="email"
                placeholder="Enter Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
            </form>
            <p
              onClick={() => setIsRegister(false)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Already have an account? Login here
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
