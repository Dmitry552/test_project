import axios, {AxiosInstance} from "axios";

export const $http: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_URL
})
