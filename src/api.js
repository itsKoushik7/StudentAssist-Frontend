import axios from 'axios';
import { ENDPOINTS } from './api_constants';

const instance = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const login = credentials => instance.post(ENDPOINTS.LOGIN, credentials);
export const register = credentials => instance.post(ENDPOINTS.REGISTER, credentials);
export const getUser = () => instance.get(ENDPOINTS.USER);
