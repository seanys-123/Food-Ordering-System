import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const handleVendorClick = () => {
      navigate('/vendor-dashboard');
    };

    const handleDashboardClick = () => {
        navigate('/');
      };

    return (
        <div className="sidebar">
        <div className="sidebar-logo">Food Hub</div>
        <ul>        
            <li onClick={handleDashboardClick} style={{ cursor: 'pointer' }}> Dashboard </li>
            <li className="active" onClick={handleVendorClick} style={{ cursor: 'pointer' }}>
                Vendor Dashboard
            </li>
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
