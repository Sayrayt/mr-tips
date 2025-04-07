import './ProfileOrders.scss'

import { Input, MultipleSelectPlaceholder, Button } from '@shared/index'

export default function ProfileOrders() {
    return (
        <div className='profile-orders'>

            <div className='profile-orders__container'>
                <div className='profile-orders__placing'>
                    <div className="profile-orders__placing-title">
                        <span className='orders-title'>Оформить заказ</span>
                    </div>

                    <div className="profile-orders__placing-form">
                        <div className="profile-orders__placing-form-input">
                            <div className="profile-orders__form-group">
                                <span className="profile-orders__label">Номер стола:</span>
                                <Input type={'number'} placeholder='Введите номер стола' />
                            </div>
                            <div className="profile-orders__form-group">
                                <span className="profile-orders__label">Состав заказа:</span>
                                <MultipleSelectPlaceholder />
                            </div>
                        </div>
                    </div>
                    <div className="profile-orders__placing-button">
                        <Button children='Оформить заказ' action={() => { console.log('clicked') }} />
                    </div>
                </div>
            </div>

            <div className='profile-orders__history'>
                <h2 className='orders-title'>История заказов</h2>
                <div className='profile-orders__history-item'>
                    <p>Заказ №228</p>
                    <p>Время завершения: <strong>25.03.2025 10:10</strong></p>
                    <p>Номер столика: <strong>1</strong></p>
                    <p>Состав заказа: <strong>Товар 1, Товар 2, Товар 3</strong></p>
                </div>
            </div>
        </div>
    )
}