import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    isSelected: false,
  },
  reducers: {
    changeMode: (state, action) => {
      state.isSelected = action.payload;
    },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
