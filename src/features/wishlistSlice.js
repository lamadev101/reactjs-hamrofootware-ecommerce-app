import { createSlice } from "@reduxjs/toolkit";

const wishItems = localStorage.getItem('wishList') !== null ? JSON.parse(localStorage.getItem('wishList')) : [];
const qty = localStorage.getItem('totalWishItems') !== null ? JSON.parse(localStorage.getItem('totalWishItems')) : 0;

const setItemFunc = (item, qty)=>{
  localStorage.setItem("wishList", JSON.stringify(item));
  localStorage.setItem("totalWishItems", JSON.stringify(qty));
}

const initialState = {
  wishList: wishItems,
  totalWishQty: qty,
}

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,

  reducers:{
    addWishItem(state, action){
      const newItem = action.payload;
      const existingItem = state.wishList.find(item=>item.id === newItem.id);
      if (!existingItem){
        state.wishList.push(newItem);
        state.totalWishQty++;
      }
      setItemFunc(state.wishList.map(item=>item), state.totalWishQty )
    },
    
    removeWishItem(state, action){
      const delId = action.payload;
      const delItem = state.wishList.find(item=>item.id === delId);
      if (delItem){
        state.wishList = state.wishList.filter(item=>item.id !== delId);
        state.totalWishQty--;
      }
      setItemFunc(state.wishList.map(item=>item), state.totalWishQty )
    }
  }
})

export const {addWishItem, removeWishItem} = wishListSlice.actions

export default wishListSlice.reducer