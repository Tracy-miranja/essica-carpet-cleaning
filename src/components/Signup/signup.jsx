import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../store/customerSlice';
import './signup.css'; // Make sure to create this CSS file for styling

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    dateOfBirth: '',
    phoneNumber: '',
    location: '',
  });
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addCustomer({ ...userData, role: 'user' }));
      setSignupSuccess(true);
      setTimeout(() => navigate('/options'), 3000); // Redirect after 3 seconds
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup failure (e.g., show error message)
    }
  };

  return (
    
    <div className="signup-container">
            <div className="signup-banner">
        <div className='signup'>
          <div className='signup-contents'>
            <h1>Sign Up</h1>
            
          </div>
        </div>
      </div>
      {signupSuccess ? (
        <p className="signup-success-message">Account successfully added.</p>
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
        {/* Input for Name */}
        <div className="form-group">
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} placeholder="Name" required />
        </div>
      
        {/* Input for Username */}
        <div className="form-group">
          <input type="text" name="username" value={userData.username} onChange={handleInputChange} placeholder="Username" required />
        </div>
      
        {/* Input for Email */}
        <div className="form-group">
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Email" required />
        </div>
      
        {/* Input for Password */}
        <div className="form-group">
          <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="Password" required />
        </div>
      
        {/* Input for Date of Birth */}
        <div className="form-group">
          <input type="date" name="dateOfBirth" value={userData.dateOfBirth} onChange={handleInputChange} required />
        </div>
      
        {/* Input for Phone Number */}
        <div className="form-group">
          <input type="tel" name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
        </div>
      
        {/* Input for Location */}
        <div className="form-group">
          <input type="text" name="location" value={userData.location} onChange={handleInputChange} placeholder="Location" required />
        </div>
      
        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="signup-submit">Sign Up</button>
        </div>
      </form>
      
      )}
    </div>
  );
};

export default Signup;
