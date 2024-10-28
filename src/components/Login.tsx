import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file

interface LoginProps {
  onLoginSuccess: (userId: string, roleId: number) => void; // Callback to handle successful login
  onGuestLogin: () => void; // Callback to handle guest login
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onGuestLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Handle regular user login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (username && password) {
      try {
        // Axios POST request to login
        const response = await axios.post('http://userbackend-702001183.ap-southeast-1.elb.amazonaws.com:8080/api/auth/login', {
          username,
          password
        });

        // If login is successful
        if (response.status === 200) {
          const data = response.data;
          const userId = data.userID;
          const username = data.username;
          const roleId = data.roleID;
          sessionStorage.setItem('userId', userId);
          sessionStorage.setItem('roleId', roleId);
          sessionStorage.setItem('username', username);
          localStorage.setItem('userId', userId);
          console.log(`Logged in as ${username}, User ID: ${userId}, role ID: ${roleId}`);
          onLoginSuccess(userId, roleId); // Callback for successful login
        }
      } catch (error: any) {
          if (error.response) {
            if (error.response.status === 401 || error.response.status === 404) {
              setErrorMessage('Invalid username or password. Please try again.');
            }
          } else {
            setErrorMessage('Unable to connect to the server. Please try again later.');
          }
        }
    } else {
      alert('Please enter both username and password');
    }
  };

  // Handle guest login
  const handleGuestLogin = async () => {
    try {
      // Axios GET request for guest login
      const response = await axios.get('http://userbackend-702001183.ap-southeast-1.elb.amazonaws.com:8080/api/auth/guest');

      // If guest login is successful
      if (response.status === 200) {
        const data = response.data;
        const guestUserId = data.userID;
        const guestRoleId = data.roleID;
        sessionStorage.setItem('userId', guestUserId);
        sessionStorage.setItem('roleId', guestRoleId);
        console.log(`Guest logged in, User ID: ${guestUserId}, Role ID: ${guestRoleId}`);
        onGuestLogin(); // Callback for guest login
      } else {
        setErrorMessage('Failed to log in as a guest. Please try again.');
      }
    } catch (error) {
      console.error('Error during guest login:', error);
      setErrorMessage('An error occurred during guest login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to Food Hub</h2>
        <form onSubmit={handleLogin}>
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <button className="guest-login-btn" onClick={handleGuestLogin}>
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
