export const userDataMock = {
    name: 'Тестовое имя',
    placeOfWork: ' Тестовое место работы',
    jobTitle: 'Тестовая должность',
    additionalInfo: 'Тестовая дополнительная информация',
    rating: 5,
    balance: 1000
}

type ProfileField = {
    spanValue: string;
    inputPlaceholder: string;
    inputSize?: 'small' | 'medium' | 'large' | '';
    hasIconButton?: boolean;
    hasProfileButton?: boolean;
    inputType?: 'text' | 'password' | 'email' | 'number' | 'tel';
}

export const profileInfoFields: ProfileField[] = [
    { spanValue: 'Имя', inputPlaceholder: 'Введите ФИО' },
    { spanValue: 'Место работы', inputPlaceholder: 'Введите место работы' },
    { spanValue: 'Должность', inputPlaceholder: 'Введите должность' }
]

//! Рейтинг и баланс нужно переработать
export const profileAdditionalFields: ProfileField[] = [
    { spanValue: 'Дополнительная информация', inputPlaceholder: 'Введите дополнительную информацию', inputSize: '', inputType: 'text' },
    { spanValue: 'Рейтинг', inputPlaceholder: '5.0', inputSize: 'small', hasIconButton: true, inputType: 'number' },
    { spanValue: 'Баланс', inputPlaceholder: '0 ₽', inputSize: 'small', hasProfileButton: true, inputType: 'number' }
]