// src/LoginForm.js
import React, { useState } from 'react';

function LoginForm({ toggleForms }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === username && user.password === password);

    if (user && !user.isBanned) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = '/index.html'; // or use React Router to navigate
    } else {
      setErrorMessage(user && user.isBanned ? 'Account is banned!' : 'Invalid username or password!');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <p>{errorMessage}</p>
      <p>
        Don't have an account? <a href="#" onClick={toggleForms}>Register here</a>
      </p>
    </div>
  );
}

export default LoginForm;
