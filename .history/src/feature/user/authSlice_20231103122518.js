import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  accessToken: null,
  isAdmin: false,
};

const authSlice = createSlice({
  initialState,
  name: "user",
  reducers: [],
});
