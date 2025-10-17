import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  // fetch appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/appointments");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAppointments();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <Header />
      <button onClick={handleLogout} style={{ position:"absolute", top:20, right:20, padding:"8px 16px" }}>Logout</button>
      <main className="dashboard-main">
        <section className="dashboard-header">
          <h1>Doctor Dashboard</h1>
          <p>Welcome Doctor! Here’s an overview of appointments.</p>
        </section>
        {appointments.length === 0 ? (
          <div className="empty-state">
            <img src="https://cdn-icons-png.flaticon.com/512/4076/4076504.png" alt="No Appointments" />
            <p>No appointments yet.</p>
          </div>
        ) : (
          <div className="appointment-table-container">
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Disease</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(a => (
                  <tr key={a.id}>
                    <td>{a.name}</td>
                    <td>{a.disease}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
