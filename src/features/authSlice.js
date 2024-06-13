import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  tokens: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { token, firstName, lastName } }) => {
      state.isLoggedIn = true;
      state.tokens = token;
      state.user = firstName + lastName;
    },
    removeCredentials: (state) => {
      state.isLoggedIn = false;
      state.tokens = null;
      state.user = null;
    },
    updateUser: (state, { payload }) => {
      state.user = payload;
    },
    resetState: () => initialState,
  },
});

export const { setCredentials, removeCredentials, updateUser, resetState } =
  authSlice.actions;

export default authSlice.reducer;
