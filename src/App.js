import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

function App() {
  const [appointments, setAppointments] = useState([]); // shared state
  const [message, setMessage] = useState(""); // backend greeting

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/greeting")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching backend message:", error);
      });
  }, []);

  return (
    <Router>
      {/* Show backend message globally (you can style or remove later) */}
      <div style={{ background: "#f5f5f5", padding: "10px", textAlign: "center" }}>
        <strong>{message ? message : "Connecting to backend..."}</strong>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={<AdminDashboard appointments={appointments} />}
        />
        <Route
          path="/user"
          element={
            <UserDashboard
              appointments={appointments}
              setAppointments={setAppointments}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
