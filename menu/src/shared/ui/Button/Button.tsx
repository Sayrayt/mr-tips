import './Button.scss'

import { ButtonProps } from '@shared/model/interfaces/ButtonProps';
import { JSX } from '@emotion/react/jsx-runtime';

export function Button({ children, variant, action, size }: ButtonProps): JSX.Element {
    return (
        <button className={`button button--${variant} button--${size}`} onClick={action}>{children}</button>
    )
}