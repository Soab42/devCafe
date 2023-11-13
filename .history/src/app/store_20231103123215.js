/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../feature/user/authSlice";

export const store = configureStore({
  reducer: {
    users: authSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  preloadedState: "",
});
