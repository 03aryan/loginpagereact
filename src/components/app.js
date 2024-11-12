// src/App.js
import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './app.css';

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const loadParticles = async () => {
      const particleElements = await createParticles();
      setParticles(particleElements);
    };

    loadParticles();
  }, []);

  const createParticles = async () => {
    // Here we simulate an async delay, e.g., fetching particles from an API.
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay

    return Array.from({ length: 100 }).map((_, i) => {
      const left = Math.random() * 100 + '%';
      const top = Math.random() * 100 + '%';
      const duration = 10 + Math.random() * 10 + 's';
      return <div key={i} className="particle" style={{ left, top, animationDuration: duration }} />;
    });
  };

  const toggleForms = () => setIsLoginVisible(!isLoginVisible);

  return (
    <div className="App">
      <div id="particles">{particles}</div>
      {isLoginVisible ? (
        <LoginForm toggleForms={toggleForms} />
      ) : (
        <RegisterForm toggleForms={toggleForms} />
      )}
    </div>
  );
}

export default App;
