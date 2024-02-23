import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCustomers } from "../../store/customerSlice";
import "./sign.css";

// eslint-disable-next-line react/prop-types
const SignIn = ({ onLoginStatusChange }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customers = useSelector((state) => state.customer.customers);
  const customerStatus = useSelector((state) => state.customer.status);

  useEffect(() => {
    if (customerStatus === "idle") {
      dispatch(fetchCustomers());
    }
  }, [customerStatus, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = customers.find(
      (c) =>
        c.username.trim() === credentials.username.trim() &&
        c.password.trim() === credentials.password.trim()
    );

    if (user) {
      localStorage.setItem("userId", user._id); // Store user ID
      localStorage.setItem("userRole", user.role); // Store user role

      navigate("/Booking");
      // Force reload the page
      window.location.reload();
      onLoginStatusChange();
    } else {
      setLoginError("Invalid username or password.");
      setTimeout(() => setLoginError(""), 2000);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="signin2-container">
      <div className="signin-section">
        <form onSubmit={handleSubmit}>
          <input
            className="signin_input"
            name="username"
            type="text"
            placeholder="👤 Username"
            value={credentials.username}
            onChange={handleChange}
          />

          <div className="password-input-container">
            <input
              className="signin_input"
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="🔒︎ Password"
              value={credentials.password}
              onChange={handleChange}
            />
            <i
              className={`bi ${
                passwordVisible ? "bi-eye" : "bi-eye-slash"
              } eye`}
              onClick={togglePasswordVisibility} // Toggle password visibility on eye icon click
            ></i>
          </div>

          {loginError && <p className="error-message">{loginError}</p>}
          <button className="signin_btn" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
