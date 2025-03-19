interface PaymentOption {
    option: string;
    title: string;
}

export interface PaymentButtonProps {
    variant?: string;
    action: () => void;
    options: PaymentOption;
    dishesCount: number;
    price: number;
}