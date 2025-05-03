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

    //Запрос на оформление заказа(Должен быть post)
    createOrder(data: any) {
        return instance.get('', data)
    },

    //Запрос на получение всех товаров
    getProducts() {
        return instance.get('')
    },

    //Запрос на получение истории заказов
    getOrdersHistory() {
        return instance.get('')
    },

    //Запрос на обновление истории заказов
    updateOrdersHistory() {
        return instance.get('')
    },

    

};

export default apiService;
