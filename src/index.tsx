import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { QueryClientProvider } from 'react-query';
import App from './App';
import './index.css';
import { client } from './initializers/apollo-client';
import { queryClient } from './initializers/init-react-query';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

Modal.setAppElement('#root');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
