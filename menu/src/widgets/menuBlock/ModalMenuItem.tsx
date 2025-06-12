import './ModalMenuItem.scss';

import { ModalMenuItemProps } from "@widgets/menuBlock/model/interfaces/ModalMenuItemProps";

export default function ModalMenuItem({ image, tags, name, info, weight, price }: ModalMenuItemProps) {
    console.log("MenuBlockItem props:", { image, name, info, tags, weight, price });

    return (
        <div className="ModalMenuItem">
            <div className="modalMenuItem__image">
                <img src={image} alt={name} />
            </div>
            <div className="modaMenulItem__content">
                <div className="modalMenuItem__tags">
                    <span>{tags || 'Теги'}</span>
                </div>
                <h2 className="modalMenuItem__name">{name}</h2>
                <p className="modalMenuItem__info">{info}</p>
                <div className="modalMenuItem__details">
                    <span>{weight} | {price}</span>
                </div>
            </div>
        </div>
    );
}
