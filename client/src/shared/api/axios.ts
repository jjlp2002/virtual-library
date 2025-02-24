import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api', // Ajusta según tu API
    withCredentials: true,
});

export default instance;
