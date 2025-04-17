import { FC } from 'react';
import { InputProps } from '@shared/model/interfaces/InputProps';
import './Input.scss';

export const Input: FC<InputProps> = ({
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


