import { createSlice } from "@reduxjs/toolkit"
const modalSlice = createSlice({
  name: "modal",
  initialState: {
   modal:false
  },
  reducers: {
    openModal:(state,action)=>{
     
      state.modal = true
      
    },
    closeModal:(state, action)=>{
      state.modal = false
    }
  
  }
})

export default modalSlice.reducer
export const {openModal, closeModal} = modalSlice.actions