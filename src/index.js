import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import App from './App';
import ScrollToTop from 'helpers/scroll-to-top';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IconContext.Provider value={{ size: '32px' }}>
          <BrowserRouter basename="/">
            <App />
            <ScrollToTop />
          </BrowserRouter>
        </IconContext.Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
