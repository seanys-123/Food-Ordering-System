import React, { useEffect, useState } from 'react';
import { MenuItem } from '../../models/MenuItem';
import { Vendor } from '../../models/Vendor';
import { getMenuItems, getVendor, getVendorStoreInfo } from '../../services/vendorService';
import { mockVendor } from '../../mock/MockData';
import VendorMenuContent from '../vendor/VendorMenuContent';
import VendorStoreContent from './VendorStoreContent';
import { VendorStoreInfo } from '../../models/VendorStoreInfo';

const VendorPage: React.FC = () => {
    const [vendor, setVendor] = useState<Vendor>();
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [vendorStoreInfo, setVendorStoreInfo] = useState<VendorStoreInfo>();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const loadMenuItems = async () => {
        try {
            if (vendor) {
                setLoading(true);
                const items = await getMenuItems(vendor.userID);
                setMenuItems(items);
            }
        } catch (err) {
            setError('Failed to load menu items ' + err);
        } finally {
            setLoading(false);
        }
    };

    const loadVendorStoreInfo = async () => {
        try {
            if (vendor) {
                setLoading(true);
                const vendorStoreInfo = await getVendorStoreInfo(vendor.userID);
                setVendorStoreInfo(vendorStoreInfo);
            }
        } catch (err) {
            setError('Failed to load vendor store Info ' + err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchVendors = async () => {
            const vendor = await getVendor(); 
            setVendor(vendor);
        };
    
        fetchVendors();
      }, []);

    useEffect(() => {
        if (vendor) {
            loadMenuItems();
            loadVendorStoreInfo();
        }
    }, [vendor]); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    
    return (
        <div className="content">
            <div className="banner">
                <h2>{vendor?.profileName} Vendor Dashboard</h2>
            </div>
            <div className="content-sections">
                {vendorStoreInfo && <VendorStoreContent vendorStoreInfo={vendorStoreInfo} />}
                <br></br>
                <VendorMenuContent menuItems={menuItems} vendor={vendor}/>
            </div>
        </div>
    );
};

export default VendorPage;