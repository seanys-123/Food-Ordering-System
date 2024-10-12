import { MenuItem } from '../models/MenuItem';
import prataSetA from '../images/Prata-Set-A.jpg';
import braisedDuckRice from '../images/Braised-Duck-Rice.png';
import chickenCurry from '../images/Chicken-Curry.jpg';
import { Vendor } from '../models/Vendor';

export const mockMenuItems: MenuItem[] = [
    {
        menuItemID: '1',
        menuItemName: 'Chicken Curry',
        price: 3.00,
        menuItemImage: chickenCurry,
        menuItemDesc: 'Delicious chicken curry with spices.',
        isValid: true,
        vendorProfileID: '1'
    },
    {
        menuItemID: '4',
        menuItemName: 'Butter Chicken',
        price: 4.00,
        menuItemImage: chickenCurry,  // Replace with actual import
        menuItemDesc: 'Creamy butter chicken served with naan.',
        isValid: true,
        vendorProfileID: '1'
    },
    {
        menuItemID: '5',
        menuItemName: 'Spicy Chicken Wings',
        price: 3.50,
        menuItemImage: chickenCurry,  // Replace with actual import
        menuItemDesc: 'Hot and spicy chicken wings.',
        isValid: true,
        vendorProfileID: '1'
    },
    {
        menuItemID: '2',
        menuItemName: 'Roast Duck Rice',
        price: 4.50,
        menuItemImage: braisedDuckRice,
        menuItemDesc: 'Succulent roast duck served with rice.',
        isValid: true,
        vendorProfileID: '2'
    },
    {
        menuItemID: '6',
        menuItemName: 'Duck Noodle Soup',
        price: 5.00,
        menuItemImage: braisedDuckRice,  // Replace with actual import
        menuItemDesc: 'Tender duck in a flavorful noodle soup.',
        isValid: true,
        vendorProfileID: '2'
    },
    {
        menuItemID: '7',
        menuItemName: 'Duck Spring Rolls',
        price: 3.50,
        menuItemImage: braisedDuckRice,  // Replace with actual import
        menuItemDesc: 'Crispy spring rolls filled with roast duck.',
        isValid: true,
        vendorProfileID: '2'
    },

    {
        menuItemID: '3',
        menuItemName: 'Prata Set A',
        price: 4.50,
        menuItemImage: prataSetA,
        menuItemDesc: 'Tasty prata served with curry.',
        isValid: true,
        vendorProfileID: '3'
    },
    {
        menuItemID: '8',
        menuItemName: 'Cheese Prata',
        price: 5.00,
        menuItemImage: prataSetA,  // Replace with actual import
        menuItemDesc: 'Flaky prata filled with melted cheese.',
        isValid: true,
        vendorProfileID: '3'
    },
    {
        menuItemID: '9',
        menuItemName: 'Egg Prata',
        price: 4.00,
        menuItemImage: prataSetA,  // Replace with actual import
        menuItemDesc: 'Prata filled with eggs and spices.',
        isValid: true,
        vendorProfileID: '3'
    }
];


export const mockVendor: Vendor[] = [
    {
        vendorProfileID: '1',
        profileName: 'Best Chicken Curry',
        address: '123 Curry Road, Spice Town',
        email: 'bestchicken@curry.com',
        phone: '1234-7891',
        status: true,
        userID: '1',
        shopDesc: 'Delicious chicken curry served with rice and naan bread.'
    },
    {
        vendorProfileID: '2',
        profileName: 'Duck Delight',
        address: '456 Roast Lane, Food City',
        email: 'duckdelight@foodcity.com',
        phone: '9985-4321',
        status: true,
        userID: '2',
        shopDesc: 'Specializing in roast duck and various rice dishes.'
    },
    {
        vendorProfileID: '3',
        profileName: 'Prata Paradise',
        address: '789 Bread Street, Flavor Town',
        email: 'paradise@flavortown.com',
        phone: '9555-4567',
        status: true,
        userID: '3',
        shopDesc: 'Serving hot and crispy prata with a variety of sides.'
    }
];