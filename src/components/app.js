// src/App.js
import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './app.css';

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  useEffect(() => {
    createParticles();
  }, []);

  const createParticles = () => {
    const particles = Array.from({ length: 100 }).map((_, i) => {
      const left = Math.random() * 100 + '%';
      const top = Math.random() * 100 + '%';
      const duration = 10 + Math.random() * 10 + 's';
      return <div key={i} className="particle" style={{ left, top, animationDuration: duration }} />;
    });
    return particles;
  };

  const toggleForms = () => setIsLoginVisible(!isLoginVisible);

  return (
    <div className="App">
      <div id="particles">{createParticles()}</div>
      {isLoginVisible ? (
        <LoginForm toggleForms={toggleForms} />
      ) : (
        <RegisterForm toggleForms={toggleForms} />
      )}
    </div>
  );
}

export default App;
