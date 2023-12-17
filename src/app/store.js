/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../feature/user/authSlice";
import modalSliceReducer from "../feature/loginmodal/modalSlice";
import routeSliceReducer from "../feature/route/routeSlice";
import filterSliceReducer from "../feature/filter/filterSlice";
import loadingSliceReducer from "../feature/loading/loadingSlice";
import singleDataSliceReducer from "../feature/data/singleDataSlice";
import allDataSliceReducer from "../feature/data/allDataSlice";
import stateChangeReducer from "../feature/state/stateChengeSlice";
export const store = configureStore({
  reducer: {
    users: authSliceReducer,
    mood: modalSliceReducer,
    route: routeSliceReducer,
    filter: filterSliceReducer,
    loading: loadingSliceReducer,
    stateChange: stateChangeReducer,
    singleData: singleDataSliceReducer,
    allData: allDataSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
