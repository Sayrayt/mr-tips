import { instance } from "./apiConfig";

//Сервис для выполнения запросов к API
const apiService = {

    test() {
        return instance.get('/test')
    },

    //Запрос на обновление данных пользователя
    updateUserData(data: any) {
        return instance.put('', data)
    },

    //Запрос на получение данных пользователя
    getUserData() {
        return instance.get('')
    },

    //Запрос на получение qr-кода для чаевых
    getTipsQRcode(data: any) {
        return instance.get('', data)
    },

    //Запрос на получение qr-кода для меню
    getMenuQRcode(data: any) {
        return instance.get('', data)
    },

};

export default apiService;
