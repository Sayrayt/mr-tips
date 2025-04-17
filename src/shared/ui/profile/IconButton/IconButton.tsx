import './IconButton.scss';

import { IconButtonProps } from '@shared/model/interfaces/IconButtonProps';
import { JSX } from '@emotion/react/jsx-runtime';

export function IconButton({ variant, icon, action }: IconButtonProps): JSX.Element {

    return (
            <button onClick={action} className={`iconButton${variant ? `iconButton-${variant}` : ''}`}>
                {icon ?
                    icon
                    : '?'
                }
            </button>
    )
}