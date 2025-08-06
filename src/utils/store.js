import { configureStore } from "@reduxjs/toolkit";
import toggleSliceReducer from "./toggleSlice.js";

const store = configureStore({
  reducer: {
    toggle: toggleSliceReducer
  }
})

export default store