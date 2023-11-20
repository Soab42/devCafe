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
    addRoute: (state, action) => action.payload,
  },
});

export const {
  singleQuestionsRouteOn,
  allQuestionsRouteOn,
  addQuestionRouteOn,
  profileRouteOn,
  aboutRouteOn,
  addRoute,
} = routeSlice.actions;
export default routeSlice.reducer;
