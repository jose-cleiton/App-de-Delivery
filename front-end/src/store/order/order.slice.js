import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  error: null,
  loading: false,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('orders/fetchLoaderUserOrders/pending', (state) => {
      state.loading = true;
    }).addCase('orders/fetchLoaderUserOrders/fulfilled', (state, action) => {
      state.orders = action.payload;
      state.loading = false;
      state.error = null;
    }).addCase('orders/fetchLoaderUserOrders/rejected', (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

const obterOrder = (state) => state.order.orders;

export { obterOrder };

export const {
  createOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
