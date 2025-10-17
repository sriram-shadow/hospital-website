import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Appointment.css";

function Appointment() {
  const [name, setName] = useState("");
  const [disease, setDisease] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  // redirect if not logged in
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) navigate("/login");
  }, [navigate]);

  const handleBook = async (e) => {
    e.preventDefault();
    if (!name || !disease || !date || !time) return alert("Fill all fields");

    try {
      const res = await fetch("http://localhost:8080/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, disease, date, time }),
      });
      if (!res.ok) throw new Error("Booking failed");
      const saved = await res.json();
      alert(`Appointment booked for ${saved.name} at ${saved.time}`);
      setName(""); setDisease(""); setDate(""); setTime("");
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <>
      <Header />
      <div className="appointment-page">
        <h1>Book Appointment</h1>
        <form onSubmit={handleBook}>
          <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} />
          <input type="text" placeholder="Disease / Health Issue" value={disease} onChange={e=>setDisease(e.target.value)} />
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
          <input type="time" value={time} onChange={e=>setTime(e.target.value)} />
          <button type="submit">Book Appointment</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Appointment;
