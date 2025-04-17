import './ProfileButton.scss'

import { ButtonProps } from '@shared/model/interfaces/ButtonProps';
import { JSX } from '@emotion/react/jsx-runtime';

export function ProfileButton({ children, variant, action, size }: ButtonProps): JSX.Element {
    return (
        <button className={`profile-button profile-button--${variant} profile-button--${size}`} onClick={action}>{children}</button>
    )
}