import { FC } from 'react';
import { InputProps } from '@shared/model/interfaces/InputProps';
import './Input.scss';

export const Input: FC<InputProps> = ({
    type = 'text',
    placeholder,
    variant = 'default',
    value,
    onChange,
    className = '',
    disabled = false,
    error
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="input-wrapper">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                className={`input input--${variant} ${className}`}
            />
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};


