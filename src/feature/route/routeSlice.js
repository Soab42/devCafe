import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const routeSlice = createSlice({
  initialState,
  name: "route",
  reducers: {
    singleQuestionsRouteOn: () => false,
    allQuestionsRouteOn: () => true,
  },
});

export const { singleQuestionsRouteOn, allQuestionsRouteOn } =
  routeSlice.actions;
export default routeSlice.reducer;
