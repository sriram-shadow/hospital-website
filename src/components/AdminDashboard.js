import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AdminDashboard({ appointments }) {
  return (
    <div>
      <Header />
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1>Doctor Dashboard</h1>

        {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>Patient Name</th>
                <th style={thStyle}>Disease</th>
                <th style={thStyle}>Appointment Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id}>
                  <td style={tdStyle}>{a.name}</td>
                  <td style={tdStyle}>{a.disease}</td>
                  <td style={tdStyle}>{a.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
      <Footer />
    </div>
  );
}

const thStyle = { border: "1px solid #ccc", padding: "10px", background: "#0077b6", color: "white" };
const tdStyle = { border: "1px solid #ccc", padding: "10px" };

export default AdminDashboard;
