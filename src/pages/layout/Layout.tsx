import './Layout.scss';

import { Outlet, NavLink } from "react-router-dom";

import Header from '@widgets/header/Header';
import { links } from '@pages/layout/__mocks__/layoutMock';

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