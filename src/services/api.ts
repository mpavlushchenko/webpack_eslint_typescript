import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import Notify from './notifyTypes';

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
