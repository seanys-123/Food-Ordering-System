// src/types.ts
export interface MenuItem {
    menuItemID: string;
    menuItemName: string;
    price: number;
    menuItemImage: string;
    vendorProfileID: string;
}


export interface Order {
    vendorProfileID: string;
    customerID: string;
    items: {
        menuItemID: string;
        quantity: number;
        price: number;
    }[];
}