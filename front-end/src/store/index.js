import { configureStore } from '@reduxjs/toolkit';

import ApiClient from '../api';
import carrinhoReducer from './carrinho/carrinho.slice';
import {
  persistUserLocalStorageMiddleware,
  reHydrateCartFromLocalStorage,
  reHydrateUserFromLocalStorage,
} from './middleware';
import productsReducer from './products/products.slice';
import userReducer from './user/user-slice';
import sellersReducer from './sellers/sellers.slice';
import ordersReducer from './order/order.slice';
import sellerSalesReducer from './sellerSales/sellerSales.slice';
import adminSlice from './user/admin-slice';
import adminNewUserSlice from './user/admin-newUser.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    carrinho: carrinhoReducer,
    sellers: sellersReducer,
    orders: ordersReducer,
    sellerSales: sellerSalesReducer,
    admin: adminSlice,
    adminNewUser: adminNewUserSlice,
  },
  preloadedState: {
    user: reHydrateUserFromLocalStorage(),
    carrinho: { produtos: reHydrateCartFromLocalStorage() || [] },
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(persistUserLocalStorageMiddleware),

  devTools: process.env.NODE_ENV !== 'production',
});

export * from './user/admin-slice';
export * from './user/user-slice';
export * from './carrinho/carrinho.slice';
export * from './sellerSales/sellerSales.slice';
export * from './user/admin-newUser.slice';
export const api = new ApiClient(store);
export default store;
