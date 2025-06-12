import { instance } from "@shared/api/apiConfig";

const ordersApiService = {
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
}

export default ordersApiService;