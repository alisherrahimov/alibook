import axios from 'axios';
import {getStorege, setStorege} from './storage';

const MAIN_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: MAIN_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async config => {
  const token = getStorege('token'); //getStorege('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log(error);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getStorege('token'); //getStorege('refreshToken');
      const response = await api.post('/auth/refresh', {
        refreshToken,
      });
      if (response.status === 200) {
        setStorege('token', response.data.token);
        return api(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
