import './Button.scss'

import { ButtonProps } from '@shared/model/interfaces/ButtonProps';

export function Button({ children, variant, action, size }: ButtonProps) {
    return (
        <button className={`button button--${variant} button--${size}`} onClick={action}>{children}</button>
    )
}