import './PaymentBlock.scss';
import { useState, useEffect } from 'react';
import { PaymentBlockProps } from "@pages/paymentPage/model/interfaces/PaymentBlockProps";
import { PaymentButton } from '@shared/index';

export default function PaymentBlock({ price, dishesCount }: PaymentBlockProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [selectedAmount, setSelectedAmount] = useState<number>(price); // Храним выбранную сумму
    const [priceForMyself, setPriceForMyself] = useState(price / 2);

    useEffect(() => {
        setPriceForMyself(price / 2);
    }, [dishesCount, price]);

    const paymentOptions = [
        { option: 'forEveryone', title: 'Оплатить полностью', amount: price },
        { option: 'forMyself', title: 'Оплатить за себя', amount: priceForMyself },
        { option: 'forDishes', title: 'Выбрать блюда для оплаты', amount: 0 }, 
    ];

    const handleClick = (index: number) => {
        setActiveIndex(index);
        setSelectedAmount(paymentOptions[index].amount); // Обновляем сумму оплаты
    };

    return (
        <div className="paymentBlock">
            <div className='paymentBlock__price'>
                <span>К оплате: <strong>{selectedAmount} ₽</strong></span>
            </div>
            <div className='paymentBlock__buttons'>
                {paymentOptions.map((option, index) => (
                    <PaymentButton
                        key={option.option}
                        dishesCount={dishesCount}
                        price={option.amount}
                        variant={activeIndex === index ? 'active' : ''} 
                        options={option}
                        action={() => handleClick(index)} 
                    />
                ))}
            </div>
        </div>
    );
}
