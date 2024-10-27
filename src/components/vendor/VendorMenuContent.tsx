import React from 'react';
import './VendorMenuContent.css';
import { MenuItem } from '../../models/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Vendor } from '../../models/Vendor';

interface MenuProps {
    menuItems: MenuItem[];
    vendor?: Vendor;
}

const VendorMenuContent: React.FC<MenuProps> = ({ menuItems, vendor }) => {
    const navigate = useNavigate();

    const handleAddNewItem = () => {
        navigate('/add-menu-item', { state: { vendor } });
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
