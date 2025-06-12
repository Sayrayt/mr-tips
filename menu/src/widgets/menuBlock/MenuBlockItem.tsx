import './MenuBlockItem.scss'

import { MenuBlockItemProps } from "@widgets/menuBlock/model/interfaces/MenuBlockItemProps";
import { JSX } from '@emotion/react/jsx-runtime';

import { ModalWindow } from '@shared/index';
import ModalMenuItem from './ModalMenuItem';

import { useState } from 'react'


export default function MenuBlockItem({ image, name, weight, info, price, tags }: MenuBlockItemProps): JSX.Element {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div onClick={handleOpen} className="menuBlockItem">
            <div className='menuBlockItem__image'>
                <img src={image} alt="" />
            </div>
            <div className='menuBlockItem__info'>
                <div className='menuBlockItem__name'>
                    <span>{name}</span>
                </div>
                <div>
                    <span>{weight} | </span>
                    <span>{price}</span>
                </div>
            </div>

            <ModalWindow content={<ModalMenuItem image={image} tags={tags} info={info} name={name} weight={weight} price={price} />} open={open} handleClose={handleClose} />
        </div>
    );
}
