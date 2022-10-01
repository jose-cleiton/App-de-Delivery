import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sellerSales: [],
  error: null,
  loading: false,
};
// fetchLoaderSalesBySeller
const sellerSalesSlice = createSlice({
  name: 'sellerSales',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('seller/fetchLoaderSalesBySeller/pending', (state) => {
      state.loading = true;
    }).addCase('seller/fetchLoaderSalesBySeller/fulfilled', (state, action) => {
      state.sellerSales = action.payload;
      state.loading = false;
      state.error = null;
    }).addCase('seller/fetchLoaderSalesBySeller/rejected', (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

const getSellerSales = (state) => state.sellerSales.sellerSales;

export { getSellerSales };

export default sellerSalesSlice.reducer;
