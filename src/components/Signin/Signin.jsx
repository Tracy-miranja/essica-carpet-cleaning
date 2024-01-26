import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCustomers } from '../../store/customerSlice';
import './sign.css';

// eslint-disable-next-line react/prop-types
const SignIn = ({ onLoginStatusChange }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customers = useSelector(state => state.customer.customers);
  const customerStatus = useSelector(state => state.customer.status);

  useEffect(() => {
    if (customerStatus === 'idle') {
      dispatch(fetchCustomers());
    }
  }, [customerStatus, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = customers.find(c => 
      c.username.trim() === credentials.username.trim() && 
      c.password.trim() === credentials.password.trim()
    );

    if (user) {
      localStorage.setItem('userId', user._id); // Store user ID
      localStorage.setItem('userRole', user.role); // Store user role

      navigate('/Booking');
      // Force reload the page
      window.location.reload();
      onLoginStatusChange();

    } else {
      setLoginError('Invalid username or password.');
      setTimeout(() => setLoginError(''), 2000);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="signin2-container">
      
      <div className="signin-section">
      <form onSubmit={handleSubmit}>
        <input  className="signin_input"
          name="username"
          type="text"
          placeholder="👤 Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input className="signin_input"
          name="password"
          type="password"
          placeholder="🔒︎ Password"
          value={credentials.password}
          onChange={handleChange}
        />
        {loginError && <p className="error-message">{loginError}</p>}
        <button  className="signin_btn" type="submit">Log in</button>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
