// src/App.tsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Login from './components/Login';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login

  // Function to handle successful login
  const handleLoginSuccess = (userId: string) => {
    console.log(`Logged in with User ID: ${userId}`);
    setIsLoggedIn(true); // Set login state to true
  };

  // Function to handle guest login
  const handleGuestLogin = () => {
    console.log('Logged in as Guest');
    setIsLoggedIn(true); // Set login state to true
  };

  // Function to handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('roleId');
    sessionStorage.removeItem('username');
    setIsLoggedIn(false); // Reset login state to false, returning to login page
  };

  return (
    <div className="app-container">
      {/* Conditionally render Login or MainContent based on login state */}
      {isLoggedIn ? (
        <>
          <Sidebar handleLogout={handleLogout} />
          <div className="main-section">
            <Header />
            <MainContent />
          </div>
        </>
      ) : (
        // Pass both onLoginSuccess and onGuestLogin to the Login component
        <Login onLoginSuccess={handleLoginSuccess} onGuestLogin={handleGuestLogin} />
      )}
    </div>
  );
};

export default App;
