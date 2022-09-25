import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  role: null,
  email: null,
  name: null,
  token: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setResetUser(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type?.startsWith('user') && type?.endsWith('/pending'),
        (state) => {
          state.loading = true;
        },
      )
      .addMatcher(
        ({ type }) => type?.startsWith('user') && type.endsWith('/fulfilled'),
        (state, { payload }) => {
          state.id = payload.id;
          state.role = payload.role;
          state.name = payload.name;
          state.email = payload.email;
          state.token = payload.token;
          state.error = null;
          state.loading = false;
        },
      )
      .addMatcher(
        ({ type }) => type?.startsWith('user') && type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload.message;
          state.loading = false;
        },
      );
  },
});

const getErrorOnLogin = (state) => state.user.error;
const getLoadingOnLogin = (state) => state.user.loading;
const getUser = ({ user: { error, loading, ...data } }) => data;

export { getErrorOnLogin, getLoadingOnLogin, getUser };

export const { setResetUser } = userSlice.actions;

export default userSlice.reducer;
