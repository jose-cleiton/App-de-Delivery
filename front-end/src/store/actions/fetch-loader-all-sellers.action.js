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

export default fetchLoaderAllSellers;
