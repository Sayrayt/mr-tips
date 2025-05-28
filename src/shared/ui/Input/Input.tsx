import './Input.scss';

import React, { ChangeEvent } from 'react';


type InputVariant = 'default' | 'error' | 'success';
interface InputProps {
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | "date";
    placeholder?: string;
    variant?: InputVariant;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
    size?: 'small' | 'medium' | 'large' | '';
}

export const Input: React.FC<InputProps> = ({
    type = 'text',
    placeholder,
    variant = 'default',
    value,
    size,
    onChange,
    disabled = false,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            className={`input ${size ? `input--${size}` : ''} ${disabled ? 'input--disabled' : ''}`}
        />
    );
};


