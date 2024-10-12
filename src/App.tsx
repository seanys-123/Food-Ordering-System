// src/App.tsx
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Login from './components/Login';
import VendorPage from './components/VendorPage';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login
  const [roleId, setRoleId] = useState<number | null>(null);

  useEffect(() => {
      const storedRoleId = sessionStorage.getItem('roleId');
      if (storedRoleId) {
        setRoleId(parseInt(storedRoleId));
      }
    }, []);

  // Function to handle successful login
   const handleLoginSuccess = (userId: string, roleId: number) => {
      console.log(`Logged in as ${roleId}`);
      setIsLoggedIn(true);
      setRoleId(roleId); // Store roleId for conditional rendering
    };

  // Function to handle guest login
  const handleGuestLogin = () => {
    console.log('Logged in as Guest');
    setIsLoggedIn(true); // Set login state to true
  };


  // Function to handle logout
  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false); // Reset login state to false, returning to login page
  };

  return (
    <div className="app-container">
          {/* Conditionally render Login or the appropriate page based on roleId */}
          {isLoggedIn ? (
            <>
              <Sidebar handleLogout={handleLogout} />
              <div className="main-section">
                <Header />
                {/* Conditionally render VendorPage or MainContent based on roleId */}
                {roleId === 2 ? (
                  <VendorPage /> // Render VendorPage if roleId is 2
                ) : roleId === 3 ? (
                  <MainContent /> // Render MainContent if roleId is 4
                ) : roleId === 4 ? (
                  <MainContent /> // Render MainContent if roleId is 4
                )
                : (
                  <div>No page available for your role</div> // Handle other roles
                )}
              </div>
            </>
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} onGuestLogin={() => handleLoginSuccess('4', 4)} />
          )}
        </div>
  );
};

export default App;
