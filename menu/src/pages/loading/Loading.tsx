import './Loading.scss'

import CircularProgress from '@mui/material/CircularProgress';


export default function Loading() {
    return (
        <div className="loading">
            <h2>Загрузка <CircularProgress /></h2>
        </div>
    )
}