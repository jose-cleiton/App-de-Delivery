import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newUsers: {},
  error: null,
  loading: false,
};

const adminSlice = createSlice({
  name: 'adminNewUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('admin/fetchCreateUser/pending', (state) => {
      state.loading = true;
    }).addCase('admin/fetchCreateUser/fulfilled', (state, action) => {
      state.newUsers = action.payload;
      state.loading = false;
      state.error = null;
    }).addCase('admin/fetchCreateUser/rejected', (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const getError = (state) => state.adminNewUser.error;

export default adminSlice.reducer;
