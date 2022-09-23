import { configureStore } from '@reduxjs/toolkit';

import ApiClient from '../api';
import fetchUserLogin from './actions/fetch-user-login';
import fetchUserRegister from './actions/fetch-user-register.action';
import userReducer from './user/user-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export * from './user/user-slice';
export const api = new ApiClient(store);
export { fetchUserLogin, fetchUserRegister };
export default store;
