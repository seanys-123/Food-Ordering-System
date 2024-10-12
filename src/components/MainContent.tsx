import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import Favorites from './Menu';
import chickenCurry from '../images/Chicken-Curry.jpg';
import BraisedDuckRice from '../images/Braised-Duck-Rice.png';
import Prata from '../images/Prata-Set-A.jpg';

const defaultFavoriteItems = [
    { name: 'Chicken Curry', price: 3, image: chickenCurry },
    { name: 'Roast Duck Rice', price: 4.50, image: BraisedDuckRice },
    { name: 'Prata Set A', price: 4.50, image: Prata },
];

interface MenuItem {
    name: string;
    price: number;
    image: string;
}

const MainContent: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultFavoriteItems);
    const [userId, setUserId] = useState<string | null>(null);

    // useEffect to retrieve the userId from sessionStorage when the component mounts
    useEffect(() => {
        const storedUserId = sessionStorage.getItem('userId');
        const storedUsername = sessionStorage.getItem('username');
        const storedRoleId = sessionStorage.getItem('roleId');
        console.log('User ID from session:', storedUserId);
        console.log('username from session:', storedUsername);
        console.log('Role ID from session:', storedRoleId);

    }, []); // Empty array ensures this runs once when the component mounts

    return (
        <div className="main-content">
            <div className="banner">
                <h2>Select your Favorite stall to order now</h2>
            </div>
            <div className="content-sections">
                <Categories setMenuItems={setMenuItems} />
                <Favorites menuItems={menuItems} />
            </div>
        </div>
    );
};

export default MainContent;
