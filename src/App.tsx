import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import VendorPage from './components/vendor/VendorPage';
import UpdateOpeningHours from './components/vendor/OpeningHours/UpdateOpeningHours';
import AddMenuItem from './components/vendor/MenuItem/AddMenuItem';
import './App.css';

const App: React.FC = () => {
  const [roleId, setRoleId] = useState<number | null>(null);
  
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-section">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/vendor-dashboard" element={<VendorPage />} />
            <Route path="/update-opening-hours" element={<UpdateOpeningHours />} />
            <Route path="/add-menu-item" element={<AddMenuItem />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
