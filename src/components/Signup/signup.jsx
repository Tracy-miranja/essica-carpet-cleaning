import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../store/customerSlice';
import worker from '../Signup/worker2.png'
import './signup.css'; 

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phoneNumber: '',
    location: '',
  });
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState('');

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userData.password !== userData.confirmPassword) {
        setPasswordMatchError('Passwords do not match');
        return;
      }

      await dispatch(addCustomer({ ...userData, role: 'user' }));
      setSignupSuccess(true);
      navigate('/options');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    // Clear the password match error when the user corrects the input
    setPasswordMatchError('');
    handleInputChange(e);
  };
  return (
    <div className="outer-dv">
    <div className="signup-container">

         <div className='section1'>
         <h2>SIGN UP</h2>
      {signupSuccess ? (
        <p className="signup-success-message">Account successfully added.</p>
      ) : (
        <form method='post' onSubmit={handleSubmit} className="signup2-form">
       
        <div className="form-group">
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} placeholder="👤 Name" required />
        </div>
      
        <div className="form-group">
          <input type="text" name="username" value={userData.username} onChange={handleInputChange} placeholder="👤 Username" required />
        </div>
      
        <div className="form-group">
        <span className="icon"></span>
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder=" ✉️ Email" required />
        </div>
      
        {/* Input for Date of Birth */}
        {/* <div className="form-group">
          <input type="date" name="dateOfBirth" value={userData.dateOfBirth} onChange={handleInputChange} required />
        </div> */}
      
       
        <div className="form-group">
          <input type="tel" name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} placeholder="☎ Phone Number" required />
        </div>
      
       
        <div className="form-group">
          <input type="text" name="location" value={userData.location} onChange={handleInputChange} placeholder="📍 Location" required />
        </div>
      
       

         
         
         <div className="form-group">
          <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder=" Password" required />
        </div>

        <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="🔒︎ Confirm Password"
              required
            />
          </div>

         
      {passwordMatchError && (
        <p className="password-match-error">{passwordMatchError}</p>
      )}

           
        <div className="form-group">
          <button type="submit" className="signup-submit">Sign Up</button>
        </div>
      </form>
      
      )}
      </div>  
      <div className='section2'>
      <figure>
      <img src={worker} alt="Sign up image" style={{ width: "550px"}} />
      </figure>
      <a href='#'>i am already a member?</a>
      </div>
    </div>
    
    </div>
  );
};

export default Signup;
