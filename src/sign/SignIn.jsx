import React, { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Authentication successful, notify the parent component
        onSignIn();
      } else {
        // Authentication failed, handle accordingly
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Handle error, show appropriate message
    }
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
