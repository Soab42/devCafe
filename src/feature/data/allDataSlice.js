import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const allDataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    addAllData: (state, action) => action.payload,
  },
});
export const { addAllData } = allDataSlice.actions;
export default allDataSlice.reducer;
