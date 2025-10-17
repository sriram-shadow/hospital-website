import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || "/";

  // ---- LOGIN ----
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("username", email);
        localStorage.setItem("role", data.role?.toLowerCase() || "user");
        alert(data.message);
        if ((data.role || "").toLowerCase() === "admin") {
          navigate("/admin");
        } else {
          navigate(fromPage);
        }
      } else {
        alert(data.message);
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
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword,
        }),
      });
      const data = await res.json();
      alert(data.message);
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
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>

            <p
              onClick={() => setIsRegister(true)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Don’t have an account? Register here
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
