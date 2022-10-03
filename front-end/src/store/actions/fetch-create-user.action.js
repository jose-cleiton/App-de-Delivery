import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleErrorResponse } from '../../utils';
import { api } from '..';

const fetchUserLogin = createAsyncThunk(
  'admin/fetchCreateUser',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post('/users', { data: payload });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(handleErrorResponse(error));
    }
  },
);

export default fetchUserLogin;
