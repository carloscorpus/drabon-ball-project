import axios from 'axios';

const BASE_URL = 'https://dragonball-api.com/api';

export const axiosApi = axios.create({
    baseURL: BASE_URL,
});
