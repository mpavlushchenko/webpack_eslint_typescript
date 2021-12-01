import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: process.env.API_URL,
  headers: { access_token: 'custom_token' },
});
client.defaults.timeout = 3000;

client.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => config,
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response && error.response.status === 403) {
      // logout()(store.dispatch);
      window.location.href = '/login';
    }
    if (error.response!.status === 404) {
      throw new Error(`${error.config.url} not found`);
    } else {
      return Promise.reject(error);
    }
  }
);

export default client;
