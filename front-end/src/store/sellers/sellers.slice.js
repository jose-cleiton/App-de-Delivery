import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sellers: [],
  error: null,
  loading: false,
};
// sellers/fetchLoaderAllSellers
const sellersSlice = createSlice({
  name: 'sellers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('sellers/fetchLoaderAllSellers/pending', (state) => {
      state.loading = true;
    }).addCase('sellers/fetchLoaderAllSellers/fulfilled', (state, action) => {
      state.sellers = action.payload;
      state.loading = false;
      state.error = null;
    }).addCase('sellers/fetchLoaderAllSellers/rejected', (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

const getSellers = (state) => state.sellers.sellers;

export { getSellers };

// export const { } = productsSlice.actions;

export default sellersSlice.reducer;
