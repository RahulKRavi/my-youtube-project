import { configureStore } from "@reduxjs/toolkit";
import toggleSliceReducer from "./toggleSlice.js";
import searchSliceReducer from "./searchSlice.js"
import liveChatSliceReducer from "./liveChatSlice.js"

const store = configureStore({
  reducer: {
    toggle: toggleSliceReducer,
    search: searchSliceReducer,
    liveChat: liveChatSliceReducer
  }
})

export default store