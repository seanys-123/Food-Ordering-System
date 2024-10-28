import React, { useState, useEffect } from 'react';
import { MenuItem } from '../type';

interface Category {
    vendorProfileID: string;
    profileName: string;
}

interface CategoriesProps {
    fetchCategoryMenu: (vendorProfileID: string) => void;
    selectedMenuItem: MenuItem | null;
    setSelectedMenuItem: React.Dispatch<React.SetStateAction<MenuItem | null>>;
}

const Categories: React.FC<CategoriesProps> = ({ fetchCategoryMenu }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string | null>(null); // State to track errors

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                //const response = await fetch('http://localhost:8080/vendor_profile/get/all/');
                const response = await fetch('https://09pq3u56g9.execute-api.ap-southeast-1.amazonaws.com/default/vendor_profile/get/all/');
                if (!response.ok) {
                    throw new Error('Failed to retrieve the categories'); // Throw an error if response is not ok
                }
                const data: Category[] = await response.json();
                setCategories(data.slice(0, 6)); // Load only 6 categories for example
                setError(null); // Clear any previous errors
            } catch (error) {
                setError('Failed to retrieve the categories.'); // Set error state
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);



//stimulate hardcoded vendor Response
/*const Categories: React.FC<CategoriesProps> = ({ fetchCategoryMenu }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string | null>(null); // State to track errors

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Simulate a hardcoded API response
                const hardcodedVendorData: Category[] = [
                    { vendorProfileID: '1', profileName: 'Asian Cuisine' },
                    { vendorProfileID: '2', profileName: 'Western Delights' },
                    { vendorProfileID: '3', profileName: 'Italian Pasta' },
                    { vendorProfileID: '4', profileName: 'Indian Tandoori' },
                    { vendorProfileID: '5', profileName: 'Mexican Fiesta' },
                    { vendorProfileID: '6', profileName: 'Dessert Haven' },
                ];

                // Simulate a delay as if fetching from an API
                await new Promise(resolve => setTimeout(resolve, 500)); // Simulate 500ms delay

                // Set the hardcoded data as categories
                setCategories(hardcodedVendorData.slice(0, 6)); // Load only 6 categories
                setError(null); // Clear any previous errors
            } catch (error) {
                setError('Failed to retrieve the categories.'); // Set error state
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories(); // Call the simulated fetch function
    }, []); */

    return (
        <div className="categories">
            <h3>Categories</h3>

            {/* Display error message if fetching categories failed */}
            {error ? (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            ) : (
                <div className="category-grid">
                    {categories.map((category) => (
                        <div key={category.vendorProfileID} className="category-item">
                            <button onClick={() => fetchCategoryMenu(category.vendorProfileID)}>
                                <span>{category.profileName}</span>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};



export default Categories;
