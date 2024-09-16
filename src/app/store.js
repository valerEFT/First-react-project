import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/slices/themeSlice";
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
