import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: "", filter: "" };
const filterSlice = createSlice({
  initialState,
  name: "filter",
  reducers: {
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addFilter, addSearch } = filterSlice.actions;
export default filterSlice.reducer;
