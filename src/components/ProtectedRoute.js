// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const storedRole = localStorage.getItem("role");

  // If no role in localStorage or role mismatch, redirect to login
  if (!storedRole || (role && storedRole !== role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
