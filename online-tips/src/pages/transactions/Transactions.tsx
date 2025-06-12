import './Transactions.scss';
import { useState, useEffect } from 'react';
import { Input, MultipleSelectPlaceholder, Button } from '@shared/index';
// import { Transaction } from '@entities/order/model/interfaces/transactions';
import { types } from 'util';

const transactionTypes = ["", "", ""]

export default function Transactions() {
    const [history, setHistory] = useState<any[]>([]);
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const [startAmount, setStartAmount] = useState<number>()
    const [endAmount, setEndAmount] = useState<number>()
    const [selectedType, setSelectedType] = useState<string[]>([])

    useEffect(() => {
        //тут должен быть запрос всех транзакций
    }, [])

    /**
     * Обработчик нажатия на кнопку "Применить"
     */
    const useFilters = () => {

    }

    return (
        <div className="transactions">
            <div className="transactions__main">
                <div className="transactions__header">
                    <span className="transactions__header-label header-label-t">История транзакций</span>
                </div>
                <div className="transactions__content-wrapper">
                    <div className="transactions__content">
                        <div className="transactions__fields">
                            <div className="transactions__field">
                                <span className="transactions__field-label field-label-t">Период транзакций:  </span>
                                <div className='transactions__field-input-container'>
                                    <p>с </p>
                                    <Input
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        type="text"
                                        placeholder=""
                                        size="large"
                                    />
                                    <p>до </p>
                                    <Input
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="transactions__field">
                                <span className="transactions__field-label field-label-t">Сумма транзакций:    </span>
                                <div className='transactions__field-input-container'>
                                    <p>с </p>
                                    <Input
                                        value={startAmount}
                                        onChange={(e) => setStartAmount(Number(e.target.value))}
                                        type="text"
                                        placeholder=""
                                        size="large"
                                    />
                                    <p>до </p>
                                    <Input
                                        value={endAmount}
                                        onChange={(e) => setEndAmount(Number(e.target.value))}
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="transactions__field">
                                <span className="transactions__field-label field-label-t">Тип транзакций:   </span>
                                <div className='transactions__field-select-wrapper'>
                                    <MultipleSelectPlaceholder
                                        productList={transactionTypes}
                                        selectedItems={selectedType}
                                        setSelectedItems={setSelectedType}
                                        // height='60px'
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="transactions__footer">
                    <div className="transactions__footer-spacer" />
                    <div className="transactions__footer-button">
                        <Button variant="secondary" action={useFilters}>
                            Применить фильтры
                        </Button>
                    </div>
                </div>
            </div>

            <div className="transactions__history">
                <div className="transactions__history-header transactions__header">
                    <span className="transactions__history-label transactions__header-label header-label-t">История</span>
                </div>
                <div className="transactions__history-content">
                    {history.length > 0 ? (
                        history.map((transaction) => (

                            <div className="transactions__history-item" key={transaction.id}>
                                <div className="transactions__history-item-header">
                                    <span className="transactions__history-item-title item-title">
                                        Заказ №{transaction.id}
                                    </span>
                                </div>
                                <div className="transactions__history-item-details">
                                    <div className="transactions__history-item-row">
                                        <span className="transactions_history-item-label item-label">Время завершения: </span>
                                        <span className="transactions__history-item-value item-value">{transaction.date}</span>
                                    </div>
                                    <div className="transactions__history-item-row">
                                        <span className="transactions__history-item-label item-label">Сумма: </span>
                                        <span className="transactions__history-item-value item-value">{transaction.amount}</span>
                                    </div>
                                    <div className="transactions__history-item-row">
                                        <span className="transactions__history-item-label item-label">Тип операции: </span>
                                        <span className="transactions__history-item-value item-value">
                                            {transaction.type}
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
