import './Button.scss'

import { ButtonProps } from '@shared/model/interfaces/ButtonProps';
import { JSX } from '@emotion/react/jsx-runtime';

export function Button({ children }: ButtonProps): JSX.Element {
    return (
        <button className='button'>{children}</button>
    )
}