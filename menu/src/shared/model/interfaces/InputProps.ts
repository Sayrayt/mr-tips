export type InputVariant = 'default' | 'error' | 'success';
import { ChangeEvent } from 'react';

export interface InputProps {
    type?: 'text' | 'password' | 'email' | 'number' | 'tel';
    placeholder?: string;
    variant?: InputVariant;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    error?: string;
    size?: 'small' | 'medium' | 'large' | '';
} 