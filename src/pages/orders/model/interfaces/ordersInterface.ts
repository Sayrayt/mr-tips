export interface Order {
    orderNumber: number;
    tableNumber: number;
    selectedItems: string[];
    date: string;
}

export interface Products {
    name: string;
}

export interface CreateOrderProps {
    tableNumber: number;
    selectedItems: string[];
}

