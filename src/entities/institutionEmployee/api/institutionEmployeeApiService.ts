import { instance } from "@shared/api/apiConfig";

//Сервис для выполнения запросов к API
const institutionEmployeeApiService = {

    //Запрос на получение данных сотрудников заведения
    getInstitutionEmployees() {
        return instance.get('')
    }
}

export default institutionEmployeeApiService;