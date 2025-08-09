import { createSlice } from "@reduxjs/toolkit";

const liveChat = createSlice({
  name: 'liveChat',
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: (state,action) => {
      state.messages.push(action.payload)
    }
  }
})

export const {addMessage} = liveChat.actions
export default liveChat.reducer