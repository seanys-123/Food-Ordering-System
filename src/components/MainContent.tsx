import React, { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import { MenuItem } from '../type';
import { Order } from '../type';

//const customerID = "12345"; // Example customer ID for now

const MainContent: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]); // Manage the menuItems
    const [order, setOrder] = useState<Order>({
        vendorProfileID: "",
        customerID: "",
        items: [],
    });
    const [orderID, setOrderID] = useState<string | null>(null); // Store the order ID after submission

    // Function to fetch category-specific menu
    const fetchCategoryMenu = async (vendorProfileID: string) => {
        try {
            //const response = await fetch(`http://localhost:8080/api/menu_items?vendorProfileID=${vendorProfileID}`);
            const response = await fetch(`https://09pq3u56g9.execute-api.ap-southeast-1.amazonaws.com/default/menu_items/get/${vendorProfileID}`);
            if (!response.ok) {
                throw new Error('Failed to fetch the category menu.');
            }
            const data: MenuItem[] = await response.json();
            setMenuItems(data); // Update the menu items with the fetched data
        } catch (error) {
            console.error('Error fetching category menu:', error);
        }
    };

    //Simulate a hardcode order response
    /*const fetchCategoryMenu = async (vendorProfileID: string) => {
        try {
            // Hardcode menu items for "Asian Cuisine"
            if (vendorProfileID === '1') {
                const hardcodedMenuItems: MenuItem[] = [
                    {
                        menuItemID: '1',
                        menuItemName: 'Sushi Roll',
                        price: 12.99,
                        vendorProfileID: 'asian-cuisine',
                        menuItemImage: 'path-to-sushi-roll-image',
                    },
                    {
                        menuItemID: '2',
                        menuItemName: 'Pad Thai',
                        price: 10.99,
                        vendorProfileID: 'asian-cuisine',
                        menuItemImage: 'path-to-pad-thai-image',
                    },
                    {
                        menuItemID: '3',
                        menuItemName: 'Dim Sum',
                        price: 8.99,
                        vendorProfileID: 'asian-cuisine',
                        menuItemImage: 'path-to-dim-sum-image',
                    },
                ];

                // Simulate a delay (optional)
                await new Promise((resolve) => setTimeout(resolve, 500));

                setMenuItems(hardcodedMenuItems); // Update with hardcoded items
            } else {
                // For other categories, set empty or default data (for example)
                setMenuItems([]);
            }
        } catch (error) {
            console.error('Error fetching category menu:', error);
        }
    };*/

    const addToOrder = (menuItemID: string, price: number, vendorProfileID: string, quantity: number) => {
        if (!order.vendorProfileID) {
            setOrder((prevOrder) => ({ ...prevOrder, vendorProfileID }));
        }

        setOrder((prevOrder) => {
            const existingItemIndex = prevOrder.items.findIndex(item => item.menuItemID === menuItemID);
            if (existingItemIndex >= 0) {
                const updatedItems = [...prevOrder.items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity
                };
                return { ...prevOrder, items: updatedItems };
            } else {
                return {
                    ...prevOrder,
                    items: [...prevOrder.items, { menuItemID, quantity, price }],
                };
            }
        });
    };

    const submitOrder = async () => {
        console.log(order);
        try {
            const response = await fetch('http://localhost:8080/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });

            if (!response.ok) {
                throw new Error('Failed to submit the order');
            }

            const data = await response.json();
            setOrderID(data.orderID); // Get orderID from the backend
            alert(`Order successfully placed! Your Order ID is: ${data.orderID}`);
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <div className="content-sections">
            {/* Categories component */}
            <Categories
                fetchCategoryMenu={fetchCategoryMenu} // Pass the function to fetch category menu
                selectedMenuItem={null}
                setSelectedMenuItem={() => {}}
            />

            {/* Menu component */}
            <Menu
                menuItems={menuItems}
                addToOrder={addToOrder} // Pass the addToOrder function to Menu
            />

            {/* Order Now button */}
            <button onClick={submitOrder} className="order-now-button">
                Order Now
            </button>
        </div>
    );
};

export default MainContent;
