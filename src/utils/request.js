import axios from "axios";

const service = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
    // timeout: 5000
});

//使用 axios 攔截器，攔截 request 回傳所有結果
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);

        return Promise.reject(error.response);
    }
);

//使用 axios 攔截器，攔截 response 回傳所有結果
service.interceptors.response.use(
    response => {
        return Promise.resolve(response);
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
