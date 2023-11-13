/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/user/authSlice";

export const store = configureStore({
  reducer: {
    users: authSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  preloadedState: "",
});
