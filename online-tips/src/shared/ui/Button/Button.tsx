import './Button.scss'
import React, { JSX } from 'react';

interface ButtonProps {
    children?: string;
    icon?: string | JSX.Element;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium';
    action: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', action, size = 'medium', icon }) => {
    const buttonClass = `button button--${variant} button--${size}`;

    return (
        <button className={icon ? 'button--icon' : buttonClass} onClick={action}>
            {icon ? icon : children}
        </button>
    );
}
