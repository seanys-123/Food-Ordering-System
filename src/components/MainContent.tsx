import React from 'react';
import Categories from './Categories';
import Favorites from './Favorites';
import TrendingMenu from './TrendingMenu';
import './MainContent.css';

const MainContent: React.FC = () => {
    return (
        <div className="main-content">
            <div className="banner">
                <h2>All Best Recipes In One Place</h2>
                <button className="order-now-btn">Order Now</button>
            </div>
            <div className="content-sections">
                <Categories />
                <Favorites />
                <TrendingMenu />
            </div>
        </div>
    );
}

export default MainContent;
