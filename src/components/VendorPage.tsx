import React, { useEffect, useState } from 'react';
import { Vendor } from './models/vendor';
import { MenuItem } from './models/menuitem';
import { VendorStoreInfo } from './models/VendorStoreInfo';
import { getMenuItems, getVendorStoreInfo } from './services/vendorService';
import VendorStoreContent from './services/VendorStoreContent';
import VendorMenuContent from './VendorMenuContent';

const VendorPage: React.FC = () => {
  const [vendor, setVendor] = useState<string>(JSON.parse(sessionStorage.getItem('userId') || 'null'));
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [vendorStoreInfo, setVendorStoreInfo] = useState<VendorStoreInfo>();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const loadMenuItems = async () => {
    try {
        if (vendor) {
            setLoading(true);
            const items = await getMenuItems(vendor);
            console.log('get menu items: ' + items);

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
            const vendorStoreInfo = await getVendorStoreInfo(vendor);
            setVendorStoreInfo(vendorStoreInfo);
        }
    } catch (err) {
        setError('Failed to load vendor store Info ' + err);
    } finally {
        setLoading(false);
    }
  };

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
            <h2>Vendor Dashboard</h2>
        </div>
        <div className="content-sections">
            {vendorStoreInfo && <VendorStoreContent vendorStoreInfo={vendorStoreInfo} />}
            <br></br>
            <VendorMenuContent menuItems={menuItems} vendorid={vendor}/>
        </div>
    </div>
  );
};

export default VendorPage;
