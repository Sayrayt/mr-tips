import './Loading.scss'

import CircularProgress from '@mui/material/CircularProgress';

import { JSX } from '@emotion/react/jsx-runtime';

export default function Loading(): JSX.Element {
    return (
        <div className="loading">
            <h2>Загрузка <CircularProgress /></h2>
            
        </div>
    )
}