import './ProfileHeader.scss'

import { Link } from 'react-router-dom'

import { JSX } from '@emotion/react/jsx-runtime'

export function ProfileHeader(): JSX.Element {
    return (
        <header className="profile-header">
            <div className="profile-header__container">
                    <Link to="/profile" className='profile-header__container-logo logo'>MR. TIPS</Link>
            </div>
        </header>
    )
}