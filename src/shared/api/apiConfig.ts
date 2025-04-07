import axios, { AxiosInstance } from "axios";

// Определение базового хоста в зависимости от окружения
const getBaseHost = () => {
    if (import.meta.env.DEV) {
        return import.meta.env.VITE_DEV_SERV;
    }
    return window.location.hostname;
};

/*
    Экземпляр axios с пользовательской конфигурацией
    @param withCredentials - разрешает отправку cookies в кросс-доменных запросах
    @param baseURL - базовый URL для всех запросов
*/
export const instance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: `http://${getBaseHost()}:5555/api`,
});

/* 
    Перехватчик запросов 
*/
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


