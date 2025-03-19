import './paymentPage.scss';

import { Separator } from '@shared/index';
import PaymentBlock from '@pages/paymentPage/ui/PaymentBlock/PaymentBlock';
import TipsBlock from '@pages/paymentPage/ui/TipsBlock/TipsBlock';
import ReviewBlock from '@pages/paymentPage/ui/ReviewBlock/ReviewBlock';

function PaymentPage() {

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
export default PaymentPage;