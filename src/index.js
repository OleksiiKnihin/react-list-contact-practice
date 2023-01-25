import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/react-list-contact-practice">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
