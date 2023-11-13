import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    userSignOut: (state, action) => {
      state.user = undefined;
      state.accessToken = undefined;
    },
  },
});

export const { userLoggedIn, userSignOut } = authSlice.actions;
