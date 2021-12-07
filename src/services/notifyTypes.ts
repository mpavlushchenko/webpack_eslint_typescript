import { AxiosError } from 'axios';
import { toast, ToastOptions } from 'react-toastify';

const Notify = {
  error: (message: AxiosError) =>
    toast.error(message, {
      message,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    } as ToastOptions),
  success: <T>(message: T) =>
    toast.success(message, {
      message,
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
    } as ToastOptions),
};

export default Notify;
