import { createSlice } from '@reduxjs/toolkit';

import * as authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthorizing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.regUser.pending]: state => {
      state.error = null;
      state.isAuthorizing = false;
    },
    [authOperations.regUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthorizing = true;
    },
    [authOperations.regUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isAuthorizing = false;
    },
    [authOperations.login.pending]: state => {
      state.error = null;
      state.isAuthorizing = false;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthorizing = true;
    },
    [authOperations.login.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isAuthorizing = false;
    },
    [authOperations.logout.pending]: state => {
      state.error = null;
      state.isAuthorizing = true;
    },
    [authOperations.logout.fulfilled]: state => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isAuthorizing = false;
    },
    [authOperations.logout.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isAuthorizing = true;
    },
    [authOperations.refreshUser.pending]: (state, action) => {
      state.isRefreshing = true;
      state.error = null;
    },
    [authOperations.refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.refreshUser.rejected]: (state, { payload }) => {
      state.isRefreshing = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
