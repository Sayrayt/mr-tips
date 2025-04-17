import apiService from '@shared/api/apiService';

import { CreateOrderProps } from '../model/interfaces/order';

export const createOrder = async ({ tableNumber, selectedItems }: CreateOrderProps) => {
    try {
        const data = { tableNumber, selectedItems };
        const response = await apiService.createOrder(data);
        if (response && response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error creating order:', error);
        return null;
    }
}

export const getProducts = async () => {
    try {
        const response = await apiService.getProducts();
        if (response && response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error fetching  products:', error);
        return null;
    }
}
