import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleErrorResponse } from '../../utils';
import { api } from '..';

const fetchLoaderAllProducts = createAsyncThunk(
  'products/fetchLoaderAllProducts',
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  },
);

export default fetchLoaderAllProducts;
