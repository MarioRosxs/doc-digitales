import { configureStore } from '@reduxjs/toolkit';
import { packages } from './api/packages'

export const store = configureStore({
  reducer: {
    [packages.reducerPath]: packages.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(packages.middleware),
});
