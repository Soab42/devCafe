import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mood: false,
};
const modalSlice = createSlice({
  initialState,
  openModal: (state) => (state.mood = true),
  closeModal: (state) => state.mood =false),
});
