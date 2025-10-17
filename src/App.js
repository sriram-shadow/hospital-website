import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [appointments, setAppointments] = useState([]); // central appointment state

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/about" 
          element={<About />} 
        />
        <Route 
          path="/services" 
          element={<Services />} 
        />
        <Route 
          path="/contact" 
          element={<Contact />} 
        />
        <Route 
          path="/appointment" 
          element={<Appointment appointments={appointments} setAppointments={setAppointments} />} 
        />
        <Route 
          path="/login" 
          element={<Login appointments={appointments} setAppointments={setAppointments} />} 
        />
        <Route 
          path="/admin" 
          element={<AdminDashboard appointments={appointments} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
