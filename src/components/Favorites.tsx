import React from 'react';
import './Favorites.css';
import chickenCurry from '../images/Chicken-Curry.jpg';
import BraisedDuckRice from '../images/Braised-Duck-Rice.png';
import Prata from '../images/Prata-Set-A.jpg'

const favoriteItems = [
    { name: 'Chicken Curry', price: 3, image: chickenCurry },
    { name: 'Roast Duck Rice', price: 4.50, image : BraisedDuckRice},
    { name: 'Prata Set A', price: 4.50, image: Prata },
];

const Favorites: React.FC = () => {
    return (
        <div className="favorites">
            <h3>Most Favorite Items</h3>
            <ul>
                {favoriteItems.map((item, index) => (
                    <li key={index}>
                        <div className="item-img"></div> {<img src ={item.image}/>}
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favorites;
