import './Profile.scss';

import photo from '@assets/images/avatar.png';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiService from '@shared/api/apiService';

import { Button, Input } from '@shared/index';
import Tooltip from '@mui/material/Tooltip';

type ProfileField = {
    spanValue: string;
    inputPlaceholder: string;
    inputSize?: 'small' | 'medium' | 'large' | '';
    hasIconButton?: boolean;
    hasProfileButton?: boolean;
    inputType?: 'text' | 'password' | 'email' | 'number' | 'tel';
}

const profileInfoFields = [
    { spanValue: 'Имя', inputPlaceholder: 'Иванов Иван Иванович' },
    { spanValue: 'Место работы', inputPlaceholder: 'Макдоналдс' },
    { spanValue: 'Должность', inputPlaceholder: 'Повар' }
]

const profileAdditionalFields: ProfileField[] = [
    { spanValue: 'Дополнительная информация', inputPlaceholder: 'Коплю на мечту', inputSize: '', inputType: 'text' },
    { spanValue: 'Рейтинг', inputPlaceholder: '5.0', inputSize: 'small', hasIconButton: true, inputType: 'number' },
    { spanValue: 'Баланс', inputPlaceholder: '0 ₽', inputSize: 'small', hasProfileButton: true, inputType: 'text' }
]

export default function Profile() {
    const [mode, setMode] = useState('view');
    const [open, setOpen] = useState(false);

    const [userData, setUserData] = useState({
        name: 'Иван',
        placeOfWork: 'Т1',
        jobTitle: 'Программист',
        additionalInfo: 'Коплю на мечту',
        rating: 0,
        balance: '0 Р'
    })

    useEffect(() => {
        getUserData()
    }, [])

    //Функции перенесу потом + добавлю обновление значений из инпутов
    const getUserData = async () => {
        try {
            const response = await apiService.getUserData();
            if (response.status === 200) {
                console.log("Данные успешно получены");
            } else {
                console.error("Ошибка при получении данных", response);
            }
        } catch (error) {
            console.error("Произошла ошибка при запросе:", error);
        }
    }

    const updateProfile = async () => {
        try {
            const response = await apiService.updateUserData(userData);
            if (response.status === 200) {
                console.log("Данные успешно обновлены");
                setMode('view'); // Вернуться в режим просмотра после успешного обновления
            } else {
                console.error("Ошибка при обновлении данных", response);
            }
        } catch (error) {
            console.error("Произошла ошибка при запросе:", error);
        }
    };

    const handleClick = () => {
        if (mode === 'view') {
            setMode('edit'); // Переход в режим редактирования
        } else {
            updateProfile(); // Отправка данных на сервер
        }
    };

    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    console.log('mode', mode);

    return (
        <div className="profile">
            <div className="profile__card">
                <div className="profile__main">
                    <div className="profile__photo">
                        <img src={photo} alt="photo" />
                    </div>
                    <div className="profile__info">

                        {profileInfoFields.map((profileInfoField, index) => (
                            <div key={`profile__field${index}`} className='profile__field'>
                                <span key={`profile__field-label${index}`} className='profile__field-label field-label'>{profileInfoField.spanValue}</span>
                                <Input disabled={mode === 'view'} type={'text'} key={`profile__field-input${index}`} placeholder={profileInfoField.inputPlaceholder} />
                            </div>
                        ))}

                    </div>
                </div>
                <div className="profile__additional">
                    <div className="profile__additional-info profile__info">
                        {profileAdditionalFields.map((profileAdditionalField, index) => (
                            <div key={`profile__additional-field${index}`} className='profile__additional-field profile__field'>
                                <span key={`profile__additional-label${index}`} className='profile__additional-label field-label'>{profileAdditionalField.spanValue}</span>
                                <Input disabled={mode === 'view'} type={profileAdditionalField.inputType} size={profileAdditionalField.inputSize} key={`profile__additional-input${index}`} placeholder={profileAdditionalField.inputPlaceholder} />

                                {profileAdditionalField.hasIconButton &&
                                    <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Рейтинг формируется как среднее арифметическое всех оценок о сотруднике">
                                        <div style={{ width: '79px', height: '79px', maxWidth: '79px', }}>
                                            <Button action={() => { }} icon={"?"}/>
                                        </div>
                                    </Tooltip>
                                }
                                {profileAdditionalField.hasProfileButton && <Button size="small" action={() => navigate('/profile/balance')}>Перейти к балансу</Button>}
                            </div>
                        ))}
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
