import { instance } from "@shared/api/apiConfig";

//Сервис для выполнения запросов к API
const institutionApiService = {

    //Запрос на получение данных заведения
    getInstitution() {
        return instance.get('')
    },

    //Запрос на получение данных сотрудников заведения
    getInstitutionEmployees() {
        return instance.get('')
    },

}

export default institutionApiService;

