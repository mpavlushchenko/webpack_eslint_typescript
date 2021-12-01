import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Photos from './Pages/Photos/Photos';

import 'antd/dist/antd.css';

const queryClient = new QueryClient();
const App = () => {
  console.log('test', process.env);

  return (
    <QueryClientProvider client={queryClient}>
      <Photos />
    </QueryClientProvider>
  );
};

export default App;
