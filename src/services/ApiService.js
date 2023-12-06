import axios from 'axios';
import { API_BASE_URL } from '../api-config';

// TODO: METHOD 나 OPTION도 추가?
const axiosApi = axios.create({
    baseURL: API_BASE_URL,
});

export default axiosApi;
