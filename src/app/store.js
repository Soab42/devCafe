/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../feature/user/authSlice";
import modalSliceReducer from "../feature/loginmodal/modalSlice";
import routeSliceReducer from "../feature/route/routeSlice";
import filterSliceReducer from "../feature/filter/filterSlice";
export const store = configureStore({
  reducer: {
    users: authSliceReducer,
    mood: modalSliceReducer,
    route: routeSliceReducer,
    filter: filterSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
