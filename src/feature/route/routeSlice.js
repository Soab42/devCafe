import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";

const routeSlice = createSlice({
  initialState,
  name: "route",
  reducers: {
    singleQuestionsRouteOn: () => "single",
    allQuestionsRouteOn: () => "all",
    profileRouteOn: () => "profile",
    addQuestionRouteOn: () => "add",
    aboutRouteOn: () => "about",
  },
});

export const {
  singleQuestionsRouteOn,
  allQuestionsRouteOn,
  addQuestionRouteOn,
  profileRouteOn,
  aboutRouteOn,
} = routeSlice.actions;
export default routeSlice.reducer;
