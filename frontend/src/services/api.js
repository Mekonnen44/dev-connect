import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

// Add a request interceptor
API.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default API;