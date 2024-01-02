import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCustomers } from '../../store/customerSlice';
import './signin.css';

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

      // Navigate based on user role
      user.role === 'admin' ? navigate('/Dashboard') : navigate('/Options');
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
    <div className="signin-container">
      <div className="signin-banner">
        <div className='signin'>
          <div className='signin-content'>
            <h1>Sign in</h1>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          name="username"
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input 
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        {loginError && <p className="error-message">{loginError}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
