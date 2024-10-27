import React from 'react';

const categories = [
    { name: 'Asian Delights'},
    { name: 'Ah Meng Roast'},
    { name: 'Western Express'},
    { name: 'Indian Village'},
    { name: 'Jin Kimchi Express'},
    { name: 'FoodHub Drink Stall'},
];

interface MenuItem {
    name: string;
    price: number;
    image: string;
}

interface CategoriesProps {
    setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const Categories: React.FC<CategoriesProps> = ({ setMenuItems }) => {
    const fetchMenu = async (stallName: string) => {
        try {
            const response = await fetch(`/api/menu?stall=${encodeURIComponent(stallName)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const menu: MenuItem[] = await response.json();
            setMenuItems(menu);
        } catch (error) {
            console.error('Failed to fetch menu:', error);
        }
    };

    return (
        <div className="categories">
            <h3>Categories</h3>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <button onClick={() => fetchMenu(category.name)}>
                            <span>{category.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
