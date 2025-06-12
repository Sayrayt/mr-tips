import './Balance.scss'

import { Button } from '@shared/index';

export default function Balance() {
    return (
        <div className="balance">
            <div className="balance-header">
                <span className='balance-header__label'> Баланс</span>
            </div>
            <div className="balance-main">
                <div className="balance-main__card">
                    <span className="balance-main__card-label">
                        ххх-ххх-ххх-ххх
                    </span>
                </div>
                <div className="balance-main__buttons">
                    <Button variant="secondary" action={() => { }}>Пополнить</Button>
                    <Button variant="secondary" action={() => { }}>Вывод средств</Button>
                </div>

            </div>
        </div>
    )
}