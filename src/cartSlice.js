import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    totalItems: 0,
    totalPrice: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (!state.items[item.id]) {
        state.items[item.id] = { ...item, quantity: 1 };
        state.totalItems += 1;
        state.totalPrice += item.price;
      }
    },
    increment: (state, action) => {
      const item = state.items[action.payload];
      item.quantity += 1;
      state.totalItems += 1;
      state.totalPrice += item.price;
    },
    decrement: (state, action) => {
      const item = state.items[action.payload];
      item.quantity -= 1;
      state.totalItems -= 1;
      state.totalPrice -= item.price;
      if (item.quantity === 0) {
        delete state.items[action.payload];
      }
    },
    removeItem: (state, action) => {
      const item = state.items[action.payload];
      state.totalItems -= item.quantity;
      state.totalPrice -= item.quantity * item.price;
      delete state.items[action.payload];
    }
  }
});

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
