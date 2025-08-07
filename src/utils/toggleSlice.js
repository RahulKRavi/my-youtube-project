import { createSlice } from "@reduxjs/toolkit";
import SideBar from "../components/SideBar";

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    toggleState: true
  },
  reducers: {
    toggleSideBar:(state)=>{
      state.toggleState = !state.toggleState
    },
    sideBarDeactive:(state)=>{
      state.toggleState = false
    },
        sideBarActivate:(state)=>{
      state.toggleState = true
    }
  }
})

export const { toggleSideBar, sideBarDeactive, sideBarActivate } = toggleSlice.actions
export default toggleSlice.reducer