import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleErrorResponse } from '../../utils';
import { api } from '..';

const fetchUserLogin = createAsyncThunk(
  'user/fetchUserLogin',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post('/login', { data: payload });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  },
);

export default fetchUserLogin;
