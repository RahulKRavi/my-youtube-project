import { configureStore } from "@reduxjs/toolkit";
import toggleSliceReducer from "./toggleSlice";

const store = configureStore({
  reducer: {
    toggle: toggleSliceReducer
  }
})

export default store