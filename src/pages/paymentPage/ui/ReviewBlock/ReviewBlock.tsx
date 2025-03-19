import './ReviewBlock.scss'

import Rating from '@mui/material/Rating';

export default function ReviewBlock() {

    const handleClick = () => {
        console.log('click');
    }

    return (
        <div className="reviewBlock">
            <div className='reviewBlock__content'>
                <div className='reviewBlock__rating'>
                    <div className='reviewBlock__title'>
                        <span>Вам все понравилось?</span>
                    </div>
                    <div className='reviewBlock__rating'>
                        <Rating name="size-large" defaultValue={3} size="large" />
                    </div>
                </div>

                <div className='reviewBlock__review'>
                    <button onClick={handleClick} className='reviewBlock__button'>
                        <span>Оставить отзыв</span>
                    </button>
                </div>
            </div>
        </div>
    )
}