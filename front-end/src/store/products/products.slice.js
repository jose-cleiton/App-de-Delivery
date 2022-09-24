import { createSlice } from '@reduxjs/toolkit';

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
    builder.addCase('products/fetchLoaderAllProducts/pending', (state) => {
      state.loading = true;
    }).addCase('products/fetchLoaderAllProducts/fulfilled', (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    }).addCase('products/fetchLoaderAllProducts/rejected', (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

const getProductsPrice = ({ products }) => products
  .items.reduce((acc, { price }) => acc + price, 0);

export { getProductsPrice };

export const { setResetUser } = productsSlice.actions;

export default productsSlice.reducer;
