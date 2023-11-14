// selectors.js
import { createSelector } from "reselect";

const getUser = (state) => state.users.user;
const getAccessToken = (state) => state.users.user.accessToken;

export const getUserInfo = createSelector(
  [getUser, getAccessToken],
  (user, accessToken) => ({
    user,
    accessToken,
  })
);
