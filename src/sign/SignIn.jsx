import { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Assume successful authentication
    const userId = 123; // Replace with the actual user ID from the server

    // Store user information in local storage
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);

    alert('Sign in successful!');
    // Redirect or handle success as needed
    window.location.href = '/Booking';
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
