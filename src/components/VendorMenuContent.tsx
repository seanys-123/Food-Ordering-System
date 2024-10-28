import React from 'react';
// import './VendorMenuContent.css';
// import { useNavigate } from 'react-router-dom';
import { MenuItem } from '../type';
import { Vendor } from './models/vendor';

interface MenuProps {
    menuItems: MenuItem[];
    vendorid?: string;
}

const VendorMenuContent: React.FC<MenuProps> = ({ menuItems, vendorid }) => {

    const handleAddNewItem = () => {

    };

    return (
        <div className="menu">
            <h3>Menu Items</h3>
            <ul className="menu-grid">
                {menuItems.map((item) => (
                    <li key={item.menuItemID} className="menu-item">
                        <div className="item-img">
                            {item.menuItemImage && <img src={item.menuItemImage} alt={item.menuItemName} />}
                        </div>
                        <span>{item.menuItemName}</span>
                        <span>${item.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>

            {/* Add New Item Button */}
            <br></br>
            <button onClick={handleAddNewItem} className="add-item-button">
                Add New Menu Item
            </button>
        </div>
    );
};

export default VendorMenuContent;