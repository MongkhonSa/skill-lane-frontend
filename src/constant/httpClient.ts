import axios from 'axios';
import store from '../redux/store';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
httpClient.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    store.dispatch({ type: 'LOGOUT' });
  }
  return Promise.reject(error);
});
export default httpClient;
