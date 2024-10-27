import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AddMenuItem.css';
import { Vendor } from '../../../models/Vendor';


interface MenuItem {
    menuItemID: string;
    menuItemName: string;
    price: number;
    menuItemImage: string;
    menuItemDesc: string;
    vendorProfileID: string;
}

const AddMenuItem: React.FC = () => {
    const navigate = useNavigate();
    // Access the location object
    const location = useLocation();
    const { vendor } = location.state as { vendor: Vendor }; // Destructure vendor from the location state

    // States to handle form inputs
    const [menuItemName, setMenuItemName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [menuItemImage, setMenuItemImage] = useState<string>('');
    const [menuItemDesc, setMenuItemDesc] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Construct a new menu item object
        const newItem: MenuItem = {
            menuItemID: Math.random().toString(36).substring(7), // Random ID for demo purposes
            menuItemName,
            price,
            menuItemImage,
            menuItemDesc,
            vendorProfileID: vendor.vendorProfileID, 
        };

        // For now, log the new menu item (this is where you'd send it to your backend API)
        console.log('New Menu Item:', newItem);

        //api call to insert menu item
        //to-do

        // Success message
        setMessage('Menu item added successfully!');

        // Optional: Navigate back to the vendor's menu page or clear the form
        navigate('/vendor-dashboard');
    };

    return (
        <div className="add-menu-item">
            <h2>Add New Menu Item</h2>

            {message && <p className="success-message">{message}</p>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="menuItemName">Menu Item Name:</label>
                    <input
                        type="text"
                        id="menuItemName"
                        value={menuItemName}
                        onChange={(e) => setMenuItemName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="menuItemImage">Image URL:</label>
                    <input
                        type="text"
                        id="menuItemImage"
                        value={menuItemImage}
                        onChange={(e) => setMenuItemImage(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="menuItemDesc">Description:</label>
                    <textarea
                        id="menuItemDesc"
                        value={menuItemDesc}
                        onChange={(e) => setMenuItemDesc(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="add-button">
                    Add Menu Item
                </button>
            </form>
        </div>
    );
};

export default AddMenuItem;
