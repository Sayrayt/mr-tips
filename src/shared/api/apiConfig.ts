import axios, { AxiosInstance } from "axios";

/*
    Экземпляр axios с пользовательской конфигурацией
    @param withCredentials - разрешает отправку cookies в кросс-доменных запросах
    @param baseURL - базовый URL для всех запросов
*/
export const instance: AxiosInstance = axios.create({
    withCredentials: true,
    // baseURL: `http://${getBaseHost()}:5555/api`,
    baseURL: import.meta.env.VITE_DEV_SERV || window.location.hostname
});


//Перехватчик запросов 
instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
        config.headers["Content-type"] = "application/json";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


