// src/RegisterForm.js
import React, { useState } from 'react';

function RegisterForm({ toggleForms }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((user) => user.username === username)) {
      setErrorMessage('Username already exists!');
    } else {
      users.push({ username, password, isBanned: false });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful! You can now log in.');
      toggleForms();
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <div className="input-group">
        <i className="fas fa-user"></i>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </div>
      <div className="input-group">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <button onClick={handleRegister}>Register</button>
      <p>{errorMessage}</p>
      <p>
        Already have an account? <a href="#" onClick={toggleForms}>Login here</a>
      </p>
    </div>
  );
}

export default RegisterForm;
