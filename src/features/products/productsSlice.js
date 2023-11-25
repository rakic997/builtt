import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products;

export default productsSlice.reducer;