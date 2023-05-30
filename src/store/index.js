import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { heroesReducer } from './heroes';

const heroesPersistConfig = {
  key: 'heroes',
  storage,
};

export const store = configureStore({
  reducer: {
    heroes: persistReducer(heroesPersistConfig, heroesReducer),
    // heroes: heroesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
