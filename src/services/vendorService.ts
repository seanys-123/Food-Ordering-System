import axios from 'axios';
import { MenuItem } from '../models/MenuItem';
import { mockMenuItems, mockVendor, mockVendorStoreInfo } from '../mock/MockData';
import { Vendor } from '../models/Vendor';
import { VendorStoreInfo, VendorStoreOpeningHours, VendorStorePromotion } from '../models/VendorStoreInfo';

const API_URL = 'http://127.0.0.1:8000';

export const getMenuItems = async (userID: string): Promise<MenuItem[]> => {
    const response = await axios.get<MenuItem[]>(`${API_URL}/menu_items/get/${userID}`);
    return response.data;
}

export const getVendor = async (): Promise<Vendor> => {
  return mockVendor[0]
    // const response = await axios.get<Vendor>(`${API_URL}/vendor_profile/get/${userID}`);
    // return response.data;
}

export const getVendorStoreInfo = async (userID: string): Promise<VendorStoreInfo> => {
  try {
    // Get opening hours
    const openingHoursResponse = await axios.get<VendorStoreOpeningHours>(`${API_URL}/opening_hours/get/${userID}`);

    // Get promotion
    const storePromotionResponse = await axios.get<VendorStorePromotion>(`${API_URL}/vendor/promotion/get/${userID}`);

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
