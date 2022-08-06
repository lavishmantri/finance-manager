import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { client } from './initializers/apollo-client';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);

Modal.setAppElement('#root');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
