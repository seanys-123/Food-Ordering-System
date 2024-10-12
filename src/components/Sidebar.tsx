// src/components/Sidebar.tsx
import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  handleLogout: () => void; // Prop for the logout function
}

const Sidebar: React.FC<SidebarProps> = ({ handleLogout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Food Hub</div>
      <ul>
        <li className="active">Dashboard</li>
        <li>Explore</li>
        <li>Favourite</li>
        <li>Order</li>
        <li>Order History</li>
        <li>Messages</li>
        <li>Reviews</li>
        <li>Settings</li>
      </ul>
      <div className="logout" onClick={handleLogout}>
        Log Out
      </div>
    </div>
  );
}

export default Sidebar;
