import './Orders.scss';
import { useState } from 'react';
import { Input, MultipleSelectPlaceholder, DeletableChip, ProfileButton } from '@shared/ui/profile/index';

export default function Orders() {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [history, setHistory] = useState<any>([]);



    const handleDelete = (itemToDelete: string) => {
        setSelectedItems((prevItems) => prevItems.filter((item) => item !== itemToDelete));
    };

    return (
        <div className="orders">
            <div className="orders__main">
                <div className="orders__header">
                    <span className="orders__header-label header-label">Оформить заказ</span>
                </div>
                <div className="orders__content-wrapper">
                    <div className="orders__content">
                        <div className="orders__fields">
                            <div className="orders__field">
                                <span className="orders__field-label field-label">Номер стола</span>
                                <Input type={'number'} placeholder={'25'} />
                            </div>
                            <div className="orders__field">
                                <span className="orders__field-label field-label">Состав заказа</span>
                                <div className="orders__field-input-wrapper" style={{ width: '100%' }}>
                                    <MultipleSelectPlaceholder
                                        selectedItems={selectedItems}
                                        setSelectedItems={setSelectedItems}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="orders__selected-items">
                            {/* Выводим выбранные айтемы */}
                            {selectedItems.length > 0 ? (
                                <>
                                    {selectedItems.map((item, index) => (
                                        <DeletableChip key={index} label={item} onDelete={() => handleDelete(item)} />
                                    ))}
                                </>
                            ) : (
                                <span>Нет выбранных товаров</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="orders__footer">
                    <div className="orders__footer-spacer">
                    </div>
                    <div className="orders__footer-button">
                        <ProfileButton variant="secondary" action={() => { }}>Оформить</ProfileButton>
                    </div>
                </div>
            </div>

            <div className="orders__history">
                <div className="orders__history-header orders__header">
                    <span className="orders__history-label orders__header-label header-label">История</span>
                </div>
                <div className='orders__history-content'>
                    <div className="orders__history-item">
                        <div className="orders__history-item-header">
                            <span className="orders__history-item-title">Заказ №1</span>
                        </div>
                        <div className="orders__history-item-details">
                            <div className="orders__history-item-row">
                                <span className="orders__history-item-label">Время завершения:</span>
                                <span className="orders__history-item-value">25.03.2025</span>
                            </div>
                            <div className="orders__history-item-row">
                                <span className="orders__history-item-label">Номер столика:</span>
                                <span className="orders__history-item-value">1</span>
                            </div>
                            <div className="orders__history-item-row">
                                <span className="orders__history-item-label">Состав заказа:</span>
                                <span className="orders__history-item-value">Товар 1, товар 2, Товар 3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
