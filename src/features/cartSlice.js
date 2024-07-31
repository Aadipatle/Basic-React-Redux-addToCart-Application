import { createSlice } from "@reduxjs/toolkit";

const initialState = []
   

const Cart = JSON.parse(localStorage.getItem('cart')) || []

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart(state , action){
            console.log(`action.payload = ${action.payload}`); // returns correct id

            state.push(action.payload);
        },

        deleteFn(state, action){
            console.log(`action.payload = ${action.payload}`); // returns correct id
            state.filter((arrow) => arrow.id !== Cart.id);
        }
    }
})

export const {addCart , deleteFn } = cartSlice.actions;
export default createSlice.reducers;
