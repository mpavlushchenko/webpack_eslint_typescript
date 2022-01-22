import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import Navigation from './Components/Navigation';
import Photos from './Pages/Photos/Photos';
import Home from './Pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ToastContainer position="top-center" autoClose={2000} />
    <Router>
      <Navigation />

      <Switch>
        <div className="page">
          <Route exact path="/" component={Home} />
          <Route path="/photos" component={Photos} />
        </div>
      </Switch>
    </Router>
  </QueryClientProvider>
);

export default App;
