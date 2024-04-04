import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://ip-api.com/json/',
});

export default axiosInstance;