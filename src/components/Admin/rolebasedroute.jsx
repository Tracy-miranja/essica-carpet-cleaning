// RoleBasedRoute.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoleBasedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "admin") {
      navigate("/adminsignin");
    } else if (userRole === "wpAdmin") {
      navigate("/WpDashboard");
    }
  }, [navigate]);

  return children;
};

export default RoleBasedRoute;
