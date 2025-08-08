import { configureStore } from "@reduxjs/toolkit";
import toggleSliceReducer from "./toggleSlice.js";
import searchSliceReducer from "./searchSlice.js"

const store = configureStore({
  reducer: {
    toggle: toggleSliceReducer,
    search: searchSliceReducer
  }
})

export default store