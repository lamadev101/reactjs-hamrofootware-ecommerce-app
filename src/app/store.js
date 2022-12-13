import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import wishListReducer from '../features/wishlistSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer,
    user: userReducer,
  },
})