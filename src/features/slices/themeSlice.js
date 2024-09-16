import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    enableDarkMode: (state) => {
      state.isDarkMode = true;
    },
    disableDarkMode: (state) => {
      state.isDarkMode = false;
    },
  },
});

export const { enableDarkMode, disableDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
