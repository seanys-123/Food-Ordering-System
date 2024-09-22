import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <input type="text" placeholder="Search your favourite foods..." className="search-bar"/>
            <div className="user-info">
                <img src="https://via.placeholder.com/40" alt="user-profile" className="user-avatar"/>
                <span>John Smith</span>
            </div>
        </div>
    );
}

export default Header;
