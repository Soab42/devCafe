import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const singleDataSlice = createSlice({
  name: "singleData",
  initialState,
  reducers: {
    addSingleData: (state, action) => action.payload,
  },
});
export const { addSingleData } = singleDataSlice.actions;
export default singleDataSlice.reducer;
