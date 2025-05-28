import './Transactions.scss';
import { useState, useEffect } from 'react';
import { Input, MultipleSelectPlaceholder, Button } from '@shared/index';
// import { Transaction } from '@entities/order/model/interfaces/transactions';
import { types } from 'util';
import { TransactionsMock } from './__mocks__/transactionsMocks';
import { TransactionsInterface } from './model/interface/transactionsInterface';

const transactionTypes = ["", "", ""]

export default function Transactions() {
    const [allTransactions, setAllTransactions] = useState<TransactionsInterface[] | []>([])
    const [history, setHistory] = useState<TransactionsInterface[]>([]);
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const [startAmount, setStartAmount] = useState<number>(0)
    const [endAmount, setEndAmount] = useState<number>(0)
    const [selectedType, setSelectedType] = useState<string>("")

    useEffect(() => {
        setAllTransactions(TransactionsMock);
        setHistory(TransactionsMock);
      }, []);
      
      useEffect(() => {
        console.log("allTransactions изменился:", allTransactions);
      }, [allTransactions]);
      
      useEffect(() => {
        console.log("history изменился:", history);
      }, [history]);

    /**
     * Обработчик нажатия на кнопку "Применить"
     */
    const parseCustomDate = (dateStr: string): Date => {
        const [day, month, year] = dateStr.split('.').map(Number);
        return new Date(year, month - 1, day);
      };
      
      const normalizeDate = (date: Date): Date => {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        return d;
      };
      
      const useFilters = () => {
        let filtered = [...allTransactions];
      
        if (startDate) {
          const start = normalizeDate(new Date(startDate));
          filtered = filtered.filter(tx => normalizeDate(parseCustomDate(tx.date)) >= start);
        }
      
        if (endDate) {
          const end = normalizeDate(new Date(endDate));
          end.setDate(end.getDate() + 1);
          filtered = filtered.filter(tx => normalizeDate(parseCustomDate(tx.date)) < end);
        }
      
        if (startAmount) {
          filtered = filtered.filter(tx => tx.amount >= startAmount);
        }
      
        if (endAmount) {
          filtered = filtered.filter(tx => tx.amount <= endAmount);
        }
      
        if (selectedType) {
          filtered = filtered.filter(tx => tx.type === selectedType);
        }
      
        setHistory(filtered);
      };

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
                                        type="date"
                                        placeholder=""
                                        size="large"
                                    />
                                    <p>до </p>
                                    <Input
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        type="date"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="transactions__field">
                                <span className="transactions__field-label field-label-t">Сумма транзакций:    </span>
                                <div className='transactions__field-input-container'>
                                    <p>от </p>
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
                                    <select value={selectedType} onChange={(e) => { setSelectedType(e.target.value) }}>
                                        <option value="">Выбрать</option>
                                        <option value="Оплата счёта">Оплата счёта</option>
                                        <option value="Оплата чаевых">Оплата чаевых</option>
                                    </select>
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
