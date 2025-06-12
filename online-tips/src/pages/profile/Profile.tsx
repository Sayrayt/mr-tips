import './Profile.scss';

import photo from '@assets/images/avatar.png';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Button, Input } from '@shared/index';
import Tooltip from '@mui/material/Tooltip';
import { userDataMock, profileInfoFields, profileAdditionalFields } from '@pages/profile/__mocks__/profileMock';
import { getUserData, updateProfile } from '@pages/profile/api/profileRequestHandler';

import { User } from '@pages/profile/model/interfaces/profileInterface';

export default function Profile() {
    const [mode, setMode] = useState('view');
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState<User>(userDataMock)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData();
            if (data) setUserData(data);
        };

        fetchData();
    }, []);

    /**
     * Редактирование данных
     */
    const handleClick = (): void => {
        if (mode === 'view') {
            setMode('edit');
        } else {
            updateProfile(userData);
            setMode('view');
        }
    };

    /**
     * Изменение данных в инпуте
     * @param field ключ из типа User
     * @param value изменяемое значение инпута
     */
    const handleInputChange = (field: keyof User, value: string | number): void => {
        setUserData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    /**
    * Закрытие подсказки
    */
    const handleClose = (): void => {
        setOpen(false);
    };

    /**
     * Открытие подсказки
     */
    const handleOpen = (): void => {
        setOpen(true);
    };

    return (
        <div className="profile">
            <div className="profile__card">
                <div className="profile__main">
                    <div className="profile__photo">
                        <img src={photo} alt="photo" />
                    </div>
                    <div className="profile__info">

                        {profileInfoFields.map((profileInfoField, index) => {

                            const fieldMapping: Record<string, keyof User> = {
                                'Имя': 'name',
                                'Место работы': 'placeOfWork',
                                'Должность': 'jobTitle'
                            };

                            const fieldKey = fieldMapping[profileInfoField.spanValue] || 'name';

                            return (
                                <div key={`profile__field${index}`} className='profile__field'>
                                    <span className='profile__field-label field-label'>{profileInfoField.spanValue}</span>
                                    <Input
                                        value={userData[fieldKey]}
                                        onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                                        disabled={mode === 'view'}
                                        type={'text'}
                                        placeholder={profileInfoField.inputPlaceholder}
                                    />
                                </div>
                            );
                        })}

                    </div>
                </div>
                <div className="profile__additional">
                    <div className="profile__additional-info profile__info">
                        {profileAdditionalFields.map((profileAdditionalField, index) => {
                            const fieldMapping: Record<string, keyof User> = {
                                'Дополнительная информация': 'additionalInfo',
                                'Рейтинг': 'rating',
                                'Баланс': 'balance'
                            };

                            // Получаем ключ из маппинга или используем безопасное значение
                            const fieldKey = fieldMapping[profileAdditionalField.spanValue] || 'additionalInfo';
                            return (
                                <div key={`profile__additional-field${index}`} className='profile__additional-field profile__field'>
                                    <span className='profile__additional-label field-label'>{profileAdditionalField.spanValue}</span>
                                    <Input
                                        value={userData[fieldKey]}
                                        onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                                        disabled={mode === 'view'}
                                        type={profileAdditionalField.inputType}
                                        size={profileAdditionalField.inputSize}
                                        placeholder={profileAdditionalField.inputPlaceholder}
                                    />

                                    {profileAdditionalField.hasIconButton &&
                                        <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Рейтинг формируется как среднее арифметическое всех оценок о сотруднике">
                                            <div style={{ width: '79px', height: '79px', maxWidth: '79px', }}>
                                                <Button action={() => { alert('Рейтинг формируется как среднее арифметическое всех оценок о сотруднике') }} icon={"?"} />
                                            </div>
                                        </Tooltip>
                                    }
                                    {profileAdditionalField.hasProfileButton && <Button size="small" action={() => navigate('/profile/balance')}>Перейти к балансу</Button>}
                                </div>
                            );
                        })}
                    </div>

                </div>
                <div className="profile__footer">
                    <div className="profile__footer-spacer">
                    </div>
                    <div className="profile__footer-button">
                        <Button variant="secondary" action={handleClick}>{mode === 'view' ? 'Редактировать профиль' : 'Сохранить данные профиля'}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
