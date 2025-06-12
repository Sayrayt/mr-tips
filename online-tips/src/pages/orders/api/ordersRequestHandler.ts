import ordersApiService from './ordersApiService';

import { CreateOrderProps } from '@pages/orders/model/interfaces/ordersInterface';

export const createOrder = async ({ tableNumber, selectedItems }: CreateOrderProps) => {
    try {
        const data = { tableNumber, selectedItems };
        const response = await ordersApiService.createOrder(data);
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
        const response = await ordersApiService.getProducts();
        if (response && response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error fetching  products:', error);
        return null;
    }
}
