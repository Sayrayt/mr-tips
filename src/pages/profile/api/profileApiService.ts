import { instance } from "@shared/api/apiConfig";

//Сервис для выполнения запросов к API
const profileApiService = {
    
    //Запрос на обновление данных пользователя
    updateUserData(data: any) {
        return instance.put('', data)
    },

    //Запрос на получение данных пользователя
    getUserData() {
        return instance.get('')
    },

};

export default profileApiService;
