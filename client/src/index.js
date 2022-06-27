import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'basedesign-iswad/dist/styles.min.css';

import 'Styles/main.scss';
import App from './App';
import { store } from 'Store';

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
