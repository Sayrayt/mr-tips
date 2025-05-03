import './Loading.scss'

import CircularProgress from '@mui/material/CircularProgress';

import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="loading">
            <h2>Загрузка <CircularProgress /></h2>

        </div>
    )
}

export default Loading;