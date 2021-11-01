/* eslint-disable import/prefer-default-export */
import { notification } from 'antd';
import axios from 'axios';

const axiosInstant = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
axiosInstant.interceptors.response.use((response) => response, (error) => {
  // Do something with response error
  if (error.response.status === 401) {
    notification.error({ message: 'test' });
  }
  return Promise.reject(error.response);
});

export default axiosInstant;
