import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // addToCart: (state, action) => {
    //   const existingItem = state.items.find((item) => item.id === action.payload.id);

    //   if (existingItem) {
    //     existingItem.quantity = action.payload.quantity;
    //   } else {
    //     state.items.push({ ...action.payload });
    //   }
    // },
    addToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
    
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;