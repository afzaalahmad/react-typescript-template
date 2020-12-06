import axios from 'axios';
import env from '../utils/env.utils';

const api = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true,
});

export default api;
