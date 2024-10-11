// src/App.tsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Login from './components/Login';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login

  // Function to handle login or guest login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
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
        <Login onGuestLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
