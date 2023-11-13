import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    userLoggedIn: (state, action) => {},
  },
});
