// selectors.js
import { createSelector } from "reselect";

const getUser = (state) => state?.users;
const getAccessToken = (state) => state?.users;

export const getUserInfo = createSelector(
  [getUser, getAccessToken],
  (user, accessToken) => ({
    user,
    accessToken,
  })
);
