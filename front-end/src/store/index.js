import { configureStore } from '@reduxjs/toolkit';

import ApiClient from '../api';
import { persistUserLocalStorageMiddleware } from './middleware';
import productsReducer from './products/products.slice';
import userReducer from './user/user-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
  preloadedState: {
    user: {},
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(persistUserLocalStorageMiddleware),

  devTools: process.env.NODE_ENV !== 'production',
});

export * from './user/user-slice';
export const api = new ApiClient(store);
export default store;
