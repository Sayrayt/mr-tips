
import './Header.scss'
import { IconButton, Separator } from '@shared/index'
import Sidebar from '@widgets/sidebar/Sidebar'

import { useState } from 'react';

import { FiAlignJustify } from "react-icons/fi";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (): void => {
        setOpen(!open);
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__brand">
                    <h2>Mr. Tips</h2>
                </div>
                <Separator />
                <div className="header__content">
                    <span>Monsieur Leonard</span>
                    <IconButton action={toggleDrawer} icon={<FiAlignJustify size={20} />} />
                </div>
            </div>
            <Sidebar open={open} toggleDrawer={toggleDrawer} />

        </header>
    )
}