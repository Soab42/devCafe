import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    addLoading: () => true,
    removeLoading: () => false,
  },
});
export const { addLoading, removeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
