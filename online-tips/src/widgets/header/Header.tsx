import './Header.scss'

import { Link } from 'react-router-dom'

import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="profile-header">
            <div className="profile-header__container">
                <Link to="/profile" className='profile-header__container-logo logo'>MR. TIPS</Link>
            </div>
        </header>
    )
}

export default Header;