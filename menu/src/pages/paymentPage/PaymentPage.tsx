import './paymentPage.scss';

import { Separator } from '@shared/index';
import PaymentBlock from '@pages/paymentPage/PaymentBlock';
import TipsBlock from '@pages/paymentPage/TipsBlock';
import ReviewBlock from '@pages/paymentPage/ReviewBlock';

export default function PaymentPage() {

    //Тестовая цена. Потом заменить
    const price = 5790;
    const dishesCount = 5;

    return (
        <div className="paymentPage">
            <div className='paymentPage__header'>
                <div className="paymentPage__brand">
                    <h2>Mr. Tips</h2>
                </div>
                <Separator />
            </div>
            <div className='paymentPage__content'>
                <PaymentBlock dishesCount={dishesCount} price={price} />
                <Separator />
                <TipsBlock price={price} />
                <Separator />
                <ReviewBlock />
            </div>

        </div>
    )
}
