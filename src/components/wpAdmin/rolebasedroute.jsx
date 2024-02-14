import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoleBasedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "admin" && userRole !== "wpAdmin") {
      // If user is neither admin nor wpAdmin, redirect to appropriate route
      navigate("/adminsignin");
    } else if (userRole === "wpAdmin") {
      // If user is wpAdmin, redirect to appropriate route
      navigate("/dashboard");
    }
  }, [navigate]);

  return children;
};

export default RoleBasedRoute;
