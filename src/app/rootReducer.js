import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;