import React from 'react';
import './Categories.css';

const categories = [
    { name: 'Asian Delights', options: 548 },
    { name: 'Ah Meng Roast', options: 1478 },
    { name: 'Western Express', options: 50 },
    { name: 'Indian Village', options: 548 },
    { name: 'Jin Kimchi Express', options: 548 },
    { name: 'FoodHub Drink Stall', options: 548 },
];

const Categories: React.FC = () => {
    return (
        <div className="categories">
            <h3>Categories</h3>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <span>{category.name}</span>
                        <span>{category.options}+ options</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
