import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt",
  initialState: {
    showgptsearch: false,
  },
  reducers: {
    toggleGptsearch: (state) => {
      state.showgptsearch = !state.showgptsearch;
    },
  },
});
export const { toggleGptsearch } = GptSlice.actions;
export default GptSlice.reducer;
