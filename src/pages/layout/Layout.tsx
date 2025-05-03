import './Layout.scss';

import { Outlet, NavLink } from "react-router-dom";

import Header from '@widgets/header/Header';

const links = [
    { path: '/profile', name: 'Профиль', end: true },
    { path: '/profile/orders', name: 'Оформить заказ' },
    { path: '/profile/institution', name: 'Заведение' },
    { path: '/profile/qr-code', name: 'QR-код' },
    { path: '/profile/balance', name: 'Баланс' },
    { path: '/profile/transactions', name: 'Транзакции' },
    { path: '/profile/login', name: 'Выход' },
]

export default function Layout() {
    return (
        <div className='profile-layout'>
            <Header />

            <div className="profile-layout__container">
                <nav className='profile-layout__container-nav'>
                    <div className='profile-layout__container-links'>
                        {links.map((link) => (
                            <NavLink
                                className={({ isActive }) =>
                                    `profile-layout__container-link link ${isActive ? 'profile-layout__container-link--active' : ''}`
                                }
                                key={link.path}
                                to={link.path}
                                end={link.end}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </nav>
                <div className="profile-layout__container-content">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}