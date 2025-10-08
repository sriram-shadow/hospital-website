import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./UserDashboard.css";

function UserDashboard({ appointments, setAppointments }) {
  const [name, setName] = useState("");
  const [disease, setDisease] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const handleBook = (e) => {
    e.preventDefault();
    if (!name || !disease || !doctor || !date) {
      alert("Please fill all fields!");
      return;
    }

    const newAppointment = {
      id: appointments.length + 1,
      name,
      disease,
      doctor,
      date,
      time: new Date().toLocaleTimeString(),
    };

    setAppointments([...appointments, newAppointment]);
    setName("");
    setDisease("");
    setDoctor("");
    setDate("");
    alert("Appointment booked successfully!");
  };

  return (
    <div className="user-dashboard">
      <Header />

      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li>🏥 Book Appointment</li>
            <li>📋 My Appointments</li>
            <li>⚙️ Settings</li>
            <li>🚪 Logout</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="dashboard-content">
          <h1>Welcome to Your Dashboard</h1>
          <p className="subtitle">Book a doctor appointment easily and view your upcoming visits.</p>

          {/* Appointment Form */}
          <div className="form-card">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleBook}>
              <input
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Health Issue / Disease"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
              />
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                <option value="">Select Doctor</option>
                <option>Dr. Ramesh (Cardiologist)</option>
                <option>Dr. Priya (Dermatologist)</option>
                <option>Dr. Arun (Orthopedic)</option>
                <option>Dr. Kavitha (Pediatrician)</option>
              </select>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <button type="submit">Book Appointment</button>
            </form>
          </div>

          {/* Appointment List */}
          <div className="appointments-section">
            <h2>My Appointments</h2>
            {appointments.length === 0 ? (
              <p>No appointments booked yet.</p>
            ) : (
              <div className="appointment-grid">
                {appointments.map((a) => (
                  <div key={a.id} className="appointment-card">
                    <h3>{a.doctor}</h3>
                    <p><strong>Patient:</strong> {a.name}</p>
                    <p><strong>Disease:</strong> {a.disease}</p>
                    <p><strong>Date:</strong> {a.date}</p>
                    <p><strong>Booked At:</strong> {a.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default UserDashboard;
