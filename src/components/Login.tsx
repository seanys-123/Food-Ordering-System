// src/components/Login.tsx
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

interface LoginProps {
  onGuestLogin: () => void; // Callback to handle login
}

const Login: React.FC<LoginProps> = ({ onGuestLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      console.log(`Logged in as ${username}`);
      onGuestLogin(); // Trigger callback on successful login
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to Food Hub</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <button className="guest-login-btn" onClick={onGuestLogin}>
          Continue as Guest
        </button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
