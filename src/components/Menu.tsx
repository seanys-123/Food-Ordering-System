import React, { useState, useEffect } from 'react';
import { MenuItem } from '../type';
import { Order } from '../type';
interface MenuProps {
    menuItems: MenuItem[];
    addToOrder: (menuItemID: string, price: number, vendorProfileID: string, quantity: number) => void;
}

const Menu: React.FC<MenuProps> = ({ menuItems, addToOrder }) => {
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({}); // Track quantities per item

    const incrementQuantity = (menuItemID: string) => {
        setQuantities((prev) => ({
            ...prev,
            [menuItemID]: (prev[menuItemID] || 1) + 1,
        }));
    };

    const decrementQuantity = (menuItemID: string) => {
        setQuantities((prev) => ({
            ...prev,
            [menuItemID]: prev[menuItemID] > 1 ? prev[menuItemID] - 1 : 1, // Ensure minimum quantity of 1
        }));
    };

    return (
        <div className="menu">
            <h3>Menu Items</h3>
            <div className="menu-items">
                {menuItems.map((item) => (
                    <div key={item.menuItemID} className="menu-item">
                        <img src={item.menuItemImage} alt={item.menuItemName} className="item-image" />
                        <span>{item.menuItemName}</span>
                        <p>Price: ${item.price}</p>

                        {/* Quantity buttons */}
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity(item.menuItemID)}>-</button>
                            <input type="number" value={quantities[item.menuItemID] || 1} readOnly />
                            <button onClick={() => incrementQuantity(item.menuItemID)}>+</button>
                        </div>

                        {/* Add to Order button */}
                        <button
                            onClick={() =>
                                addToOrder(
                                    item.menuItemID,
                                    item.price,
                                    item.vendorProfileID,
                                    quantities[item.menuItemID] || 1
                                )
                            }
                        >
                            Add to Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
