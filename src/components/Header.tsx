import React, { useEffect, useState } from 'react';
import './Header.css';
import profile from '../images/profile_img.png';

const Header: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);

    // Retrieve username from sessionStorage when the component mounts
    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            setUsername('Guest');
        }
    }, []);

    return (
        <div className="header">
            <input type="text" placeholder="Search your favourite foods..." className="search-bar" />
            <div className="user-info">
                <img src={profile} alt="user-profile" className="user-avatar" />
                <span>{username}</span> {/* Display the username or "Guest" */}
            </div>
        </div>
    );
};

export default Header;
