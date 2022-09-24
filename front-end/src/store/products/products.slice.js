import { createSlice } from '@reduxjs/toolkit';

import { fetchLoaderAllProducts } from '../actions';

const initialState = {
  items: [],
  error: null,
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoaderAllProducts.pending, (state) => {
        state.loading = true;
      }).addCase(fetchLoaderAllProducts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.loading = false;
      }).addCase(fetchLoaderAllProducts.rejected, (state, { payload }) => {
        state.error = payload.message;
        state.loading = false;
      });
  },
});

const getProductsPrice = ({ products }) => products
  .items.reduce((acc, { price }) => acc + price, 0);

export { getProductsPrice };

export const { setResetUser } = productsSlice.actions;

export default productsSlice.reducer;
