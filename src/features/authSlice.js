import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  isLoggedIn: false,
  tokens: null,
  user: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { token, firstName, lastName, role, id } }
    ) => {
      state.id = id;
      state.isLoggedIn = true;
      state.tokens = token;
      state.user = firstName + lastName;
      state.role = role;
    },
    removeCredentials: (state) => {
      state.id = null;
      state.isLoggedIn = false;
      state.tokens = null;
      state.user = null;
      state.role = null;
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
