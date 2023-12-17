import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mood: false,
};
const modalSlice = createSlice({
  initialState,
  name: "mood",
  reducers: {
    openModal: (state) => {
      return { ...state, mood: true };
    },
    closeModal: (state) => {
      return { ...state, mood: false };
    },
    confirmModal: (state) => {
      return { ...state, mood: "confirm" };
    },
  },
});
export const { openModal, closeModal, confirmModal } = modalSlice.actions;
export default modalSlice.reducer;
