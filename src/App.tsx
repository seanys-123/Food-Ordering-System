// src/App.tsx
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Login from './components/Login';
import VendorPage from './components/VendorPage';
import OrderPage from './components/OrderPage';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login
  const [roleId, setRoleId] = useState<number | null>(null);
  const [isOrderHistory, setIsOrderHistory] = useState(false);

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
    setIsOrderHistory(false);
    setIsLoggedIn(false); // Reset login state to false, returning to login page
  };

  const toOrderPage = () => {
    console.log("got here");
    setIsOrderHistory(true);
    console.log(isOrderHistory);
  };

  const closeOrderPage = () =>{
    setIsOrderHistory(false);
    console.log(isOrderHistory);
  };

  return (
    <div className="app-container">
          {/* Conditionally render Login or the appropriate page based on roleId */}
          {isLoggedIn ? (
            <>
              <Sidebar handleLogout={handleLogout} toOrderPage={ toOrderPage } />
              <div className="main-section">
                <Header />
                {/* Conditionally render VendorPage or MainContent based on roleId */}
                {roleId === 2 ? (
                  <VendorPage /> // Render VendorPage if roleId is 2
                ) : roleId === 3 ? (
                  <MainContent /> // Render MainContent if roleId is 4
                ) : roleId === 4 ? (
                  <>
                  {isOrderHistory === true ?(
                    <OrderPage closeOrderPage = {closeOrderPage}/>
                  ):<MainContent /> }
                  </>
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
