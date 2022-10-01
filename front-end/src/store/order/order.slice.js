import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  details: {},
  error: null,
  loading: false,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    updateStatus: (state, { payload }) => {
      state.details.status = payload;
    },
  },
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

    builder.addCase('orders/fetchLoaderOderDetails/pending', (state) => {
      state.loading = true;
    }).addCase('orders/fetchLoaderOderDetails/fulfilled', (state, action) => {
      state.details = action.payload;
      state.loading = false;
      state.error = null;
    }).addCase('orders/fetchLoaderOderDetails/rejected', (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

const obterOrder = (state) => state.order.orders;
const getOrderDetails = (state) => state.orders.details;
const getTotalPriceOrderDetails = (state) => state.orders.details.salesProducts
  .reduce((acc, curr) => acc + (curr.price * curr.sales_products.quantity), 0);

export { obterOrder, getOrderDetails, getTotalPriceOrderDetails };

export const {
  createOrder,
  updateStatus,
} = orderSlice.actions;

export default orderSlice.reducer;
