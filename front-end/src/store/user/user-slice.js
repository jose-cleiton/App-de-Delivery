import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  role: null,
  name: null,
  token: null,
  error: null,
  loading: false,
};

const postsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setClearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        (state) => {
          state.loading = true;
        },
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        (state, { payload }) => {
          state.id = payload.id;
          state.role = payload.role;
          state.name = payload.name;
          state.token = payload.token;
          state.loading = false;
        },
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload.message;
          state.loading = false;
        },
      );
  },
});

const getErrorOnLogin = (state) => state.user.error;
const getLoadingOnLogin = (state) => state.user.loading;
const getUser = ({ error, loading, ...user }) => user;

export { getErrorOnLogin, getLoadingOnLogin, getUser };

export const { setClearError } = postsSlice.actions;

export default postsSlice.reducer;
