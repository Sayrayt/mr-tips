import './IconButton.scss';

import { IconButtonProps } from '@shared/model/interfaces/IconButtonProps';

export function IconButton({ variant, icon, action }: IconButtonProps) {

    return (
        <button onClick={action} className={`iconButton${variant ? `iconButton-${variant}` : ''}`}>
            {icon ?
                icon
                : ''
            }
        </button>
    )
}