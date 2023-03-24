import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false;
}

const cartModalSlice = createSlice({
    name: 'cartModal',
    initialState,
    reducers:{
        openModal:(state)=>{
            state.isOpen = !state.isOpen;
        },
        closeModal:(state) =>{
            state.isOpen = !state.isOpen;
        }
    }

})

export default cartModalSlice.reducer;
export const {openModal,closeModal} = cartModalSlice.actions;