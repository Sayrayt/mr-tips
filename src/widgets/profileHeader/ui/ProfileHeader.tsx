import './ProfileHeader.scss'

import { Link } from 'react-router-dom'

import { JSX } from '@emotion/react/jsx-runtime'

export function ProfileHeader(): JSX.Element {
    return (
        <header className="profile-header">
            <div className="profile-header__container">
                <div className="profile-header__logo-container ">
                    <Link to="/profile" className='profile-header__logo logo'>MR. TIPS</Link>
                </div>
            </div>
        </header>
    )
}