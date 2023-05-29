import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { heroesReducer } from './heroes';

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
});

setupListeners(store.dispatch);
