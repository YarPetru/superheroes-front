import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IconContext.Provider value={{ size: '32px' }}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </IconContext.Provider>
    </Provider>
  </React.StrictMode>
);
