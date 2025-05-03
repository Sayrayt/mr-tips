import './QRCode.scss';

import { useEffect, useState } from 'react';

import { getTipsQRCode, getMenuQRCode } from './api/qrCodeRequestHandler';
import { Button, Input } from '@shared/index'

import qr1 from '@assets/images/qr1.png'
import qr2 from '@assets/images/qr2.png'

export default function QRCode() {
    const [orderNumber, setOrderNumber] = useState<number>(1);
    const [tableNumber, setTableNumber] = useState<number>(1);
    const [activeTab, setActiveTab] = useState<'tips' | 'menu'>('tips');
    const [tipsQR, setTipsQR] = useState<string>('');
    const [menuQR, setMenusQR] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setTipsQR('');
    }, [orderNumber])

    useEffect(() => {
        setMenusQR('');
    }, [tableNumber])

    const fetchQRCode = async (type: 'tips' | 'menu', value: number) => {
        if (!value) {
            return;
        }
        setLoading(true);
        try {
            const apiMethod = type === 'tips' ? getTipsQRCode : getMenuQRCode;
            const response = await apiMethod(value);
            if (type === 'tips') {
                setTipsQR(response || qr1); //Заменить
            } else {
                setMenusQR(response || qr2); //Заменить
            }
        } catch (error) {
            console.error(`Ошибка при получении QR-кода.${error}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="qr">
            <div className="qr__tabs">
                <Button variant={activeTab === 'tips' ? 'primary' : 'secondary'} action={() => setActiveTab('tips')}>QR-код для чаевых</Button>
                <Button variant={activeTab === 'tips' ? 'secondary' : 'primary'} action={() => setActiveTab('menu')}>QR-код для меню</Button>
            </div>
            <div className="qr__content">
                {activeTab === 'tips' ? (
                    <>
                        <div className="qr__content-field">
                            <span className="qr__content-label field-label">Номер заказа</span>
                            <Input type='number' value={orderNumber} onChange={(e) => setOrderNumber(Number(e.target.value))} size={'small'} placeholder="Введите номер" />
                        </div>
                        {loading ? (
                            <div className="qr__loading">Загрузка...</div>
                        ) : (
                            <>
                                {!tipsQR ? (
                                    <div className='qr__content-button'>
                                        <Button action={() => fetchQRCode('tips', orderNumber)}>Сгенерировать</Button>
                                    </div>
                                ) : (
                                    <div className="qr__content-code">
                                        <img src={tipsQR} alt="QR код для чаевых" />
                                    </div>
                                )}

                            </>
                        )}
                    </>
                ) : (
                    <>
                        <div className="qr__content-field">
                            <span className="qr__content-label field-label">Номер стола</span>
                            <Input type='number' value={tableNumber} onChange={(e) => setTableNumber(Number(e.target.value))} size={'small'} placeholder="Введите номер" />
                        </div>
                        {loading ? (
                            <div className="qr__loading">Загрузка...</div>
                        ) : (
                            <>
                                {!menuQR ? (
                                    <div className='qr__content-button'>
                                        <Button action={() => fetchQRCode('menu', tableNumber)}>Сгенерировать</Button>
                                    </div>
                                ) : (
                                    <div className="qr__content-code">
                                        <img src={menuQR} alt="QR код для меню" />
                                    </div>)
                                }
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
