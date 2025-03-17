import './Sidebar.scss'
import { Drawer } from '@mui/material';
import SidebarContent from './SidebarContent'
import { FiX } from "react-icons/fi";

import { JSX } from '@emotion/react/jsx-runtime';
import { SidebarProps } from '@widgets/sidebar/model/interfaces/SidebarProps';

export function Sidebar({ open, toggleDrawer }: SidebarProps): JSX.Element {
    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
            <div className='sidebar'>
                <SidebarContent action={toggleDrawer} icon={<FiX size={20} />} />
            </div>
        </Drawer>
    )
}