import { useState } from "react";
import axios from "axios";
import "./forgotpassword.css";
import { Navigate } from "react-router-dom";

const ForgotPassword = () => {
  // State to store the email entered by the user
  const [email, setEmail] = useState("");
  // State to store the status message to show to the user
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to your backend to initiate the password reset process
      const response = await axios.post(
        "http://localhost:3000/forgotpassword",
        { email }
      );
      if (response) {
        Navigate("/SignIn");
      }

      // Handle the response from the backend
      setMessage(response.data.message);
    } catch (error) {
      // Handle error if any
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="forgotpassword">
      <div className="innerdv">
        <form onSubmit={handleSubmit}>
          <div className="UserReset">
            <h2>Forgot Password</h2>
            <p>
              Enter your email, you will receive a reset password in your email
            </p>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </div>
        </form>
        {/* Display the status message */}
        {message && <p>{message} </p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
