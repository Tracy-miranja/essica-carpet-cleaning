import  { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone_number: phoneNumber,
          location,
          password,
        }),
      });

      if (response.ok) {
        // Sign-up successful, notify the parent component
        onSignUp();
      } else {
        // Sign-up failed, handle accordingly
        alert('Failed to sign up. Please check your information and try again.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      // Handle error, show appropriate message
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
