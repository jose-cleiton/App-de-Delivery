import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleErrorResponse } from '../../utils';
import { api } from '..';

const fetchUserRegister = createAsyncThunk(
  'user/fetchUserRegister',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post('/register', { data: payload });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  },
);

export default fetchUserRegister;
