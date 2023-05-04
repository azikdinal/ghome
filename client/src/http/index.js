import axios from "axios";

const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
const $signHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
const authInterceptor = config =>{
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
}

$signHost.interceptors.request.use(authInterceptor)

export{
    $host,
    $signHost,
    $authHost
}