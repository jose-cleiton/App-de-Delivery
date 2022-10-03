import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  error: null,
  loading: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('admin/fetchGetUser/pending', (state) => {
      state.loading = true;
    }).addCase('admin/fetchGetUser/fulfilled', (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    }).addCase('admin/fetchGetUser/rejected', (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const obterUsuarios = (state) => state.admin.users;

export default adminSlice.reducer;
