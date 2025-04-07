export type InputVariant = 'default' | 'error' | 'success';

export interface InputProps {
    type?: 'text' | 'password' | 'email' | 'number' | 'tel';
    placeholder?: string;
    variant?: InputVariant;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    disabled?: boolean;
    error?: string;
} 