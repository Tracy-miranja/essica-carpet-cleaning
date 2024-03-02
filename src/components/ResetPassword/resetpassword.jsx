import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { id, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !token) {
      // Handle missing id or token, e.g., redirect to an error page
      navigate("/error");
    }
  }, [id, token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/resetpassword/${id}/${token}`,
        { password }
      );
      if (response) {
        // <options />;
        navigate("/options");
      }
    } catch (error) {
      console.log(error, error);
    }
  };

  return (
    <div className="forgotpassword">
      <h2>Reset Password</h2>
      <div className="innerdv">
        <form onSubmit={handleSubmit}>
          <div className="UserReset">
            <h2>New Password</h2>

            <label htmlFor="email"></label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
