import './Button.scss'

import { ButtonProps } from '@shared/model/interfaces/ButtonProps';
import { JSX } from '@emotion/react/jsx-runtime';

export function Button({ children, variant, action }: ButtonProps): JSX.Element {
    return (
        <button className={`button button--${variant}`} onClick={action}>{children}</button>
    )
}