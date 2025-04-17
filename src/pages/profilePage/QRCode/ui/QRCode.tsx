import './QRCode.scss'

import { useState } from 'react'
import apiService from '@shared/api/apiService'

import { ProfileButton, Input } from '@shared/ui/profile/index'

import qr1 from '@assets/images/qr1.png'
import qr2 from '@assets/images/qr2.png'

export default function QRCode() {
    const [orderNumber, setOrderNumber] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [activeTab, setActiveTab] = useState('tips');
    const [qrCodes, setQrCodes] = useState<{ tips: string | null, menu: string | null }>({ tips: null, menu: null });
    const [loading, setLoading] = useState(false);

    const handleGenerateQR = async (type: 'tips' | 'menu', value: string) => {
        if (!value) return;

        setLoading(true);
        try {
            const apiMethod = type === 'tips' ? apiService.getTipsQRcode : apiService.getMenuQRcode;
            const response = await apiMethod(value);

            if (response.status === 200) {
                setQrCodes((prevState) => ({
                    ...prevState,
                    [type]: response.data.qrCodeUrl || (type === 'tips' ? qr1 : qr2),
                }));
            } else {
                setQrCodes((prevState) => ({ ...prevState, [type]: null }));
            }
        } catch (error) {
            console.error('Error generating QR code:', error);
            setQrCodes((prevState) => ({ ...prevState, [type]: null }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="qr">
            <div className="qr__tabs">
                <ProfileButton variant={activeTab === 'tips' ? 'primary' : 'secondary'} action={() => setActiveTab('tips')}>QR-код для чаевых</ProfileButton>
                <ProfileButton variant={activeTab === 'tips' ? 'secondary' : 'primary'} action={() => setActiveTab('menu')}>QR-код для меню</ProfileButton>
            </div>
            <div className="qr__content">
                {activeTab === 'tips' ? (
                    <>
                        <div className="qr__content-field">
                            <span className="qr__content-label field-label">Номер заказа</span>
                            <Input type='number' value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} size={'small'} placeholder="Введите номер" />
                        </div>
                        {loading ? (
                            <div className="qr__loading">Загрузка...</div>
                        ) : (
                            <>
                                {!qrCodes.tips && (
                                    <div className='qr__content-button'>
                                        <ProfileButton action={() => handleGenerateQR('tips', orderNumber)}>Сгенерировать</ProfileButton>
                                    </div>
                                )}
                                {qrCodes.tips && (
                                    <div className="qr__content-code">
                                        <img src={qrCodes.tips} alt="QR код для чаевых" />
                                    </div>
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <div className="qr__content-field">
                            <span className="qr__content-label field-label">Номер стола</span>
                            <Input type='number' value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} size={'small'} placeholder="Введите номер" />
                        </div>
                        {loading ? (
                            <div className="qr__loading">Загрузка...</div>
                        ) : (
                            <>
                                {!qrCodes.menu && (
                                    <div className='qr__content-button'>
                                        <ProfileButton action={() => handleGenerateQR('menu', tableNumber)}>Сгенерировать</ProfileButton>
                                    </div>
                                )}
                                {qrCodes.menu && (
                                    <div className="qr__content-code">
                                        <img src={qrCodes.menu} alt="QR код для меню" />
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
