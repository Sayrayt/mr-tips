import './SidebarContent.scss'

import { Separator, IconButton } from '@shared/index'

import { IconButtonProps } from '@shared/model/interfaces/IconButtonProps'
import { JSX } from '@emotion/react/jsx-runtime';

export default function SidebarContent({ action, icon }: IconButtonProps): JSX.Element {

    const routes = [{ path: '/', name: 'Меню' }, { path: '/menu/order', name: 'Мой заказ' }, { path: '/menu/payment', name: 'Оплатить' }]

    return (
        <div className="sidebarContent">
            <div className='sidebarContent__header'>
                <div className="sidebarContent__brand">
                    <h2>Mr. Tips</h2>
                </div>
                <Separator />
                <div className="sidebarContent__info">
                    <span>Monsieur Leonard</span>
                    <IconButton action={action} icon={icon} />
                </div>
            </div>
            <div className='sidebarContent__main'>
                <div className='sidebarContent__navigation'>
                    {routes.map((route) => (

                        <a href={route.path} key={route.path}>{route.name}</a>
                    ))}
                </div>
                <div className='sidebarContent__footer'>
                    <span>8 (999) 99-99-99</span>
                </div>
            </div>
        </div>
    )
}