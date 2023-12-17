import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const stateChangeSlice = createSlice({
  name: "stateChange",
  initialState,
  reducers: {
    addStateChange: (state, action) => action.payload,
  },
});
export const { addStateChange } = stateChangeSlice.actions;
export default stateChangeSlice.reducer;
