import { instance } from "@shared/api/apiConfig";

//Сервис для выполнения запросов к API
const qrCodeApiService = {

    //Запрос на получение qr-кода для чаевых
    getTipsQRcode(data: any) {
        return instance.get('', data)
    },

    //Запрос на получение qr-кода для меню
    getMenuQRcode(data: any) {
        return instance.get('', data)
    },
}

export default qrCodeApiService;