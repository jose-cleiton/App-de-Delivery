import { configureStore } from '@reduxjs/toolkit';

import ApiClient from '../api';
import {
  persistUserLocalStorageMiddleware,
  reHydrateUserFromLocalStorage,
} from './middleware';
import productsReducer from './products/products.slice';
import userReducer from './user/user-slice';
import carrinhoReducer from './carrinho/carrinho.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    carrinho: carrinhoReducer,
  },
  preloadedState: {
    user: reHydrateUserFromLocalStorage(),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(persistUserLocalStorageMiddleware),

  devTools: process.env.NODE_ENV !== 'production',
});

export * from './user/user-slice';
export * from './carrinho/carrinho.slice';
export const api = new ApiClient(store);
export default store;
