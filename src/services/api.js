import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-omnistack5623.herokuapp.com',
});

export default api;