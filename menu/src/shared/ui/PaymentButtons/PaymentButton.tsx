import './PaymentButton.scss';
import { JSX } from '@emotion/react/jsx-runtime';
import { PaymentButtonProps } from "@shared/model/interfaces/PaymentButtonProps";

export function PaymentButton({ variant, action, options, dishesCount, price }: PaymentButtonProps): JSX.Element {
    const { option, title } = options;

    return (
        <button onClick={action} className='paymentButton'>
            <div className={variant === 'active' ? `paymentButton__content-active` : `paymentButton__content`}>
                {option === 'forEveryone' ? (
                    <>
                        <span>{title}</span>
                        <strong>
                            <span className='paymentButton__price'>{price} ₽</span>
                        </strong>
                    </>
                ) : option === 'forMyself' ? (
                    <>
                        <span>{title}</span>
                        <span className='paymentButton__price'>
                            <strong>{price} ₽</strong> за 1/2
                        </span>
                    </>
                ) : (
                    <div className='paymentButton__dishesCount'>
                        <span>{title}</span>
                        <span className='paymentButton__price'>Количество блюд: {dishesCount} {dishesCount > 0 ? '→' : ''}</span>
                    </div>
                )}
            </div>
        </button>
    );
}
