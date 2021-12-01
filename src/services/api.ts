import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast, ToastOptions } from 'react-toastify';

const Notify = {
  error: (message: AxiosError) =>
    toast.error(message, {
      message,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    } as ToastOptions),
  success: (message: string) =>
    toast.success(message, {
      message,
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
    } as ToastOptions),
};

const client = axios.create({
  baseURL: process.env.API_URL,
  headers: { access_token: 'custom_token' },
});
client.defaults.timeout = 3000;

client.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => config,
  (error: AxiosError) => Notify.error(error)
);

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    Notify.success(response.statusText || 'Success');

    return response;
  },
  (error: AxiosError) => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
      Notify.error(error);
    }

    return Promise.reject(error);
  }
);

export default client;
