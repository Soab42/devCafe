import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mood: false,
};
const modalSlice = createSlice({
  initialState,
  openModal: (state) => state.mood,
  closeModal: (state) => state.mood,
});
