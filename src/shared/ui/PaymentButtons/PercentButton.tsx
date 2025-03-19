import './PercentButton.scss';

import { JSX } from '@emotion/react/jsx-runtime';
import { PercentButtonProps } from "@shared/model/interfaces/PercentButtonProps";

export function PercentButton({ action, variant, tipsOption }: PercentButtonProps): JSX.Element {
    const { title, result } = tipsOption;

    return (
        <button onClick={action} className='percentButton'>
            {title !== 'Указать сумму чаевых' ? (
                <div  className={`${variant === 'active' ? 'percentButton__content-active' : 'percentButton__content'}`}>
                    <div className="percentButton__percent">
                        <span>{title}</span>
                    </div>
                    <div className="percentButton__price">
                        <span>{result} ₽</span>
                    </div>
                </div>
            ) : (
                <div className={`${variant === 'active' ? 'percentButton__content-custom-active' : 'percentButton__content-custom'}`}>
                    <div className="percentButton__title">
                        <span>{title}</span>
                    </div>
                </div>
            )}
        </button>
    );
}
