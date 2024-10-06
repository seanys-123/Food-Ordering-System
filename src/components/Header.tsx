import React from 'react';
import './Header.css';
import profile from '../images/profile_img.png';

const Header: React.FC = () => {
    return (
        <div className="header">
            <input type="text" placeholder="Search your favourite foods..." className="search-bar"/>
            <div className="user-info">
                <img src= {profile} alt="user-profile" className="user-avatar"/>
                <span>Sean Jackson</span>
            </div>
        </div>
    );
}

export default Header;
