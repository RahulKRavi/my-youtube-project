import { createSlice } from "@reduxjs/toolkit";

const liveChat = createSlice({
  name: 'liveChat',
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: (state,action) => {
      state.messages.splice(10,1);
      state.messages.unshift(action.payload);
    }
  }
})

export const {addMessage} = liveChat.actions
export default liveChat.reducer