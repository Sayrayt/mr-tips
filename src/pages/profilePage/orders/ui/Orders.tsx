import './Orders.scss';
import { useState, useEffect } from 'react';
import { Input, MultipleSelectPlaceholder, DeletableChip, ProfileButton } from '@shared/ui/profile/index';
import { Order } from '@entities/order/model/interfaces/order';
import { createOrder, getProducts } from '@entities/order/api/orderApi';

export default function Orders() {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [tableNumber, setTableNumber] = useState<number>(1);
    const [history, setHistory] = useState<Order[]>([]);
    const [productList, setProductList] = useState<string[]>([]); // TODO: Добавить тип для продуктов

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProductList(response);
            } catch (error) {
                setProductList([]);
                console.error('Ошибка при получении продуктов', error);
            }
        };
        fetchProducts();
    }, [])

    /**
     * Обработчик нажатия на кнопку "Оформить"
     */
    const handleCreateOrder = async () => {
        try {
            const payload = { tableNumber, selectedItems };
            const response = await createOrder(payload);
            console.log(response);
            

            // !!!!!!!!!!!!!!!Убрать отрицание
            const newOrder = response || {
                orderNumber: history.length + 1,
                date: '17.04.2025',
                tableNumber: tableNumber,
                selectedItems: [...selectedItems]
            };

            setHistory(prev => [...prev, newOrder]);

            setTableNumber(1);
            setSelectedItems([]);

        } catch (error) {
            console.error('Ошибка при создании заказа', error);
        }
    };

    /**
     * Обработчик нажатия на кнопку "Удалить"
     * @param itemToDelete - название выбранного элемента
     */
    const handleDeleteItem = (itemToDelete: string) => {
        setSelectedItems((prev) => prev.filter((item) => item !== itemToDelete));
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
                                <Input
                                    value={tableNumber}
                                    onChange={(e) => setTableNumber(Number(e.target.value))}
                                    type="number"
                                    placeholder="25"
                                />
                            </div>
                            <div className="orders__field">
                                <span className="orders__field-label field-label">Состав заказа</span>
                                <div className="orders__field-input-wrapper" style={{ width: '320px' }}>
                                    <MultipleSelectPlaceholder
                                        productList={productList}
                                        selectedItems={selectedItems}
                                        setSelectedItems={setSelectedItems}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="orders__selected-items">
                            {selectedItems.length > 0 ? (
                                selectedItems.map((item, idx) => (
                                    <DeletableChip
                                        key={idx}
                                        label={item}
                                        onDelete={() => handleDeleteItem(item)}
                                    />
                                ))
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </div>
                <div className="orders__footer">
                    <div className="orders__footer-spacer" />
                    <div className="orders__footer-button">
                        <ProfileButton variant="secondary" action={handleCreateOrder}>
                            Оформить
                        </ProfileButton>
                    </div>
                </div>
            </div>

            <div className="orders__history">
                <div className="orders__history-header orders__header">
                    <span className="orders__history-label orders__header-label header-label">История</span>
                </div>
                <div className="orders__history-content">
                    {history.length > 0 ? (
                        history.map((order) => (

                            <div className="orders__history-item" key={order.orderNumber}>
                                <div className="orders__history-item-header">
                                    <span className="orders__history-item-title item-title">
                                        Заказ №{order.orderNumber}
                                    </span>
                                </div>
                                <div className="orders__history-item-details">
                                    <div className="orders__history-item-row">
                                        <span className="orders__history-item-label item-label">Время завершения: </span>
                                        <span className="orders__history-item-value item-value">{order.date}</span>
                                    </div>
                                    <div className="orders__history-item-row">
                                        <span className="orders__history-item-label item-label">Номер столика: </span>
                                        <span className="orders__history-item-value item-value">{order.tableNumber}</span>
                                    </div>
                                    <div className="orders__history-item-row">
                                        <span className="orders__history-item-label item-label">Состав заказа: </span>
                                        <span className="orders__history-item-value item-value">
                                            {order.selectedItems.join(', ')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        null
                    )}
                </div>
            </div>
        </div>
    );
}
