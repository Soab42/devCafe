import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mood: false,
};
const modalSlice = createSlice({
  initialState,
  reducers: {
    openModal: (state) => (state.mood = true),
    closeModal: (state) => (state.mood = false),
  },
});
export const { openModal, closeModal } = modalSlice.actions;
