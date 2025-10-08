import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./AdminDashboard.css";

function AdminDashboard({ appointments }) {
  return (
    <div className="admin-dashboard">
      <Header />

      <main className="dashboard-main">
        <section className="dashboard-header">
          <h1>Doctor Dashboard</h1>
          <p>Welcome Doctor! Here’s an overview of your upcoming appointments.</p>
        </section>

        {appointments.length === 0 ? (
          <div className="empty-state">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076504.png"
              alt="No Appointments"
            />
            <p>No appointments yet. Once patients book, they’ll appear here.</p>
          </div>
        ) : (
          <div className="appointment-table-container">
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Disease / Concern</th>
                  <th>Appointment Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id}>
                    <td>{a.name}</td>
                    <td>{a.disease}</td>
                    <td>{a.time}</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
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
