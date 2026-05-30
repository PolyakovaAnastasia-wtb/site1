import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import HomePage from './homepage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <HomePage />
    </Layout>
  </BrowserRouter>
);