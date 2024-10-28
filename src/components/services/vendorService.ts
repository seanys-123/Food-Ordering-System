import axios from 'axios';
import { VendorStoreInfo, VendorStoreOpeningHours, VendorStorePromotion } from '../models/VendorStoreInfo';
import { Vendor } from '../models/vendor';
import { MenuItem } from '../models/menuitem';

const API_URL = 'https://09pq3u56g9.execute-api.ap-southeast-1.amazonaws.com/default';

export const getMenuItems = async (userID: string): Promise<MenuItem[]> => {
    const response = await axios.get<MenuItem[]>(`${API_URL}/menu_items/get/${userID}`);
    console.log('get menu items: ' + response.data);
    return response.data;
}

// export const getVendor = async (): Promise<Vendor> => {
//   return mockVendor[0]
//     // const response = await axios.get<Vendor>(`${API_URL}/vendor_profile/get/${userID}`);
//     // return response.data;
// }

export const getVendorStoreInfo = async (userID: string): Promise<VendorStoreInfo> => {
  try {
    // Get opening hours
    const openingHoursResponse = await axios.get<VendorStoreOpeningHours>(`${API_URL}/opening_hours/get/${userID}`);

    // Get promotion
    const storePromotionResponse = await axios.get<VendorStorePromotion>(`${API_URL}/promotion/get/${userID}`);

    // Combine both responses into VendorStoreInfo
    const vendorStoreInfo: VendorStoreInfo = {
      openingHours: openingHoursResponse.data,
      promotion: storePromotionResponse.data,
    };

    return vendorStoreInfo;
  } catch (error) {
    console.error('Error fetching vendor store info:', error);
    throw new Error('Failed to fetch vendor store info.');
  }
}