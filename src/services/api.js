import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.2.13:3030',
});

export default api;