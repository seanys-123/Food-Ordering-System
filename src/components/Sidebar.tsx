import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
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
    <div className="logout">Log Out</div>
    </div>
);
}

export default Sidebar;
