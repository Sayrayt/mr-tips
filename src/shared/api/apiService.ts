import { instance } from "./apiConfig";

//Сервис для выполнения запросов к API
const apiService = {

    test() {
        return instance.get('/test')
    }

};

export default apiService;
