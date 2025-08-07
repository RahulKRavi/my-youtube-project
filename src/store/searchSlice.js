import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name:search,
  initialState:{
    suggestions: null
  },
  reducers: {
    addSuggestions: (state,actions) => {
 
    }
  }
})

export const {addSuggestions} = searchSlice.actions

export default searchSlice.reducer