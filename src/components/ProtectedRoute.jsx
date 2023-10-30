import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    const authToken = sessionStorage.getItem("authToken");
    return !!authToken;
  };

  if (isAuthenticated()) {
    return children;
  } else {
    return <Navigate to="/sign-in" />;
  }
};