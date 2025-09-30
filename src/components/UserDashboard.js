import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function UserDashboard({ appointments, setAppointments }) {
  const [name, setName] = useState("");
  const [disease, setDisease] = useState("");

  const handleBook = (e) => {
    e.preventDefault();
    if (!name || !disease) return;

    const newAppointment = {
      id: appointments.length + 1,
      name,
      disease,
      time: new Date().toLocaleString(),
    };

    setAppointments([...appointments, newAppointment]);
    setName("");
    setDisease("");
    alert("Appointment booked successfully!");
  };

  return (
    <div>
      <Header />
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1>User Appointment Page</h1>

        <form onSubmit={handleBook} style={{ marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "10px", marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Disease"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            style={{ padding: "10px", marginRight: "10px" }}
          />
          <button type="submit" style={{ padding: "10px 20px" }}>Book Appointment</button>
        </form>

        <h2>My Appointments</h2>
        {appointments.length === 0 ? (
          <p>No appointments booked yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {appointments.map((a) => (
              <li key={a.id} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
                <strong>{a.name}</strong> - {a.disease} <br /> <em>{a.time}</em>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default UserDashboard;
