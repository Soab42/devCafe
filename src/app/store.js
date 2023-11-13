/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../feature/user/authSlice";
import modalSliceReducer from "../feature/loginmodal/modalSlice";

export const store = configureStore({
  reducer: {
    users: authSliceReducer,
    mood: modalSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
