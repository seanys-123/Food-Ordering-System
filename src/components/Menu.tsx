import React from 'react';
import './Menu.css';
import chickenCurry from '../images/Chicken-Curry.jpg';
import BraisedDuckRice from '../images/Braised-Duck-Rice.png';
import Prata from '../images/Prata-Set-A.jpg';
interface MenuItem {
    name: string;
    price: number;
    image: string;
}

interface MenuProps {
    menuItems: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
    return (
        <div className="Menu">
            <h3>Stall Menu Items</h3>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <div className="item-img">
                            {item.image && <img src={item.image} alt={item.name} />}
                        </div>
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
