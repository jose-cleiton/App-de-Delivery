import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleErrorResponse } from '../../utils';
import { api } from '..';

const fetchUserLogin = createAsyncThunk(
  'admin/fetchGetUser',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.get('/userList');
      return response.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  },
);

export default fetchUserLogin;
