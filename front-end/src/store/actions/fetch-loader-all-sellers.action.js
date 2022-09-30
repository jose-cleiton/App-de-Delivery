import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleErrorResponse } from '../../utils';
import { api } from '..';

const fetchLoaderAllSellers = createAsyncThunk(
  'sellers/fetchLoaderAllSellers',
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await api.get('/sellers');
      return response.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  },
);

const fetchLoaderSalesBySeller = createAsyncThunk(
  'seller/fetchLoaderSalesBySeller',
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await api.get('/orders/salesBySellerId');
      return response.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  },
);

export default fetchLoaderAllSellers;
export { fetchLoaderSalesBySeller };
