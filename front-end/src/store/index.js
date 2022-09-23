import { configureStore } from '@reduxjs/toolkit';

import ApiClient from '../api';
import userReducer from './user/user-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export * from './user/user-slice';
export const api = new ApiClient(store);
export default store;
