
import './Profile.scss'

import { Outlet, Link } from "react-router-dom";

import { ProfileHeader } from '@widgets/profileHeader'

export default function Profile() {

    const links = [
        { path: '/profile', name: 'Профиль' },
        { path: '/profile/orders', name: 'Оформить заказ' },
        { path: '/profile/institution', name: 'Заведение' },
        { path: '/profile/qr-code', name: 'QR-код' },
        { path: '/profile/balance', name: 'Баланс' },
        { path: '/profile/transactions', name: 'Транзакции' },
        { path: '/profile/login', name: 'Выход' },
    ]

    return (
        <div className='profile'>
            <ProfileHeader />

            <div className="profile__container">
                <nav className='profile__container-nav'>
                    {links.map((link) => (
                        <Link className='profile__container-nav-link' key={link.path} to={link.path}>{link.name}</Link>
                    ))}
                </nav>

                <Outlet />
            </div>
        </div>
    );
}