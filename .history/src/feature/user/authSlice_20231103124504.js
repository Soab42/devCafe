import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: { username: "saif", email: "saif@gmail.com" },
};

const authSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    userSignOut: (state) => {
      state.user = undefined;
      state.accessToken = undefined;
    },
  },
});

export const { userLoggedIn, userSignOut } = authSlice.actions;
export default authSlice.reducer;
