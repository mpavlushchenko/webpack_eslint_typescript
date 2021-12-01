import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ToastContainer } from 'react-toastify';

import Photos from './Pages/Photos/Photos';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

const queryClient = new QueryClient();
const App = () => {
  console.log('test', process.env);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-center" autoClose={2000} />
      <Photos />
    </QueryClientProvider>
  );
};

export default App;
