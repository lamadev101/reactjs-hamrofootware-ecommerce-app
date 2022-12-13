import { createSlice } from '@reduxjs/toolkit'

// Get items from localStorage
const items = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) :[];
const qty = localStorage.getItem("totalQty") !== null ? JSON.parse(localStorage.getItem("totalQty")) :0;
const amount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount")) :0;

const initialState = {
  cartItems: items,
  totalQty: qty,
  totalAmount: amount
}

// Code Refactor for set item in LocalStorage
const setItemFunc = (item, qty, amount)=>{
  localStorage.setItem('cartItems', JSON.stringify(item));
  localStorage.setItem('totalQty', JSON.stringify(qty));
  localStorage.setItem('totalAmount', JSON.stringify(amount));
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    add(state, action){
      const newItem = action.payload;
      const existingItem = state.cartItems?.find(item => item.id === newItem.id);
      if(!existingItem){
        state.cartItems?.push(newItem);
        state.totalQty++;
      }

      // Calculate total amount of items
      state.totalAmount = state.cartItems.reduce((total, item)=> total + Number(item.sp)*item.qty, 0);
      
      // Store Items in localStorage
      setItemFunc(state.cartItems.map(item=>item), state.totalQty, state.totalAmount);
    },
    
    remove(state, action){
      const delId = action.payload;
      const delItem = state.cartItems.find(item=> item.id === delId); 
      
      if(delItem){
        state.cartItems = state.cartItems.filter(item=>item.id !== delId);
        state.totalQty--;
      }

      state.totalAmount = state.cartItems.reduce((total, item)=> total + Number(item.sp)*item.qty, 0);

      setItemFunc(state.cartItems.map(item=>item), state.totalQty, state.totalAmount);
    },

  },
})

// Action creators are generated for each case reducer function
export const { add, remove} = cartSlice.actions

export default cartSlice.reducer