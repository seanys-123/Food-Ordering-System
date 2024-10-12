import axios from 'axios';
import { MenuItem } from '../models/MenuItem';
import { mockMenuItems, mockVendor } from '../mock/MockData';
import { Vendor } from '../models/Vendor';

const API_URL = 'http://127.0.0.1:8000';

export const getMenuItems = async (): Promise<MenuItem[]> => {
  return mockMenuItems
    // const response = await axios.get<MenuItem[]>('/vendor/get/featured');
    // return response.data;
  };

export const getVendors = async (): Promise<Vendor[]> => {
  return mockVendor
    // const response = await axios.get<MenuItem[]>('/vendor/get/featured');
    // return response.data;
  };

// export const placeOrder = async (order: Order): Promise<void> => {
//   await axios.post(`${API_URL}/order`, order);
// };
