import React from 'react';
import './TrendingMenu.css';

const trendingItems = [
    { name: 'Medium Spicy Spaghetti Italiano', price: 5.6, orders: 89 },
    { name: 'Watermelon juice with ice', price: 5.6, orders: 89 },
    { name: 'Chicken curry special with cucumber', price: 5.6, orders: 89 },
    { name: 'Italiano Pizza With Garlic', price: 5.6, orders: 89 },
];

const TrendingMenu: React.FC = () => {
    return (
        <div className="trending-menu">
            <h3>Daily Trending Menus</h3>
            <ul>
                {trendingItems.map((item, index) => (
                    <li key={index}>
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                        <span>Order {item.orders}x</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrendingMenu;
