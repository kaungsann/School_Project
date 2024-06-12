import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      return state.filter((cartItem) => cartItem.id !== action.payload);
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((cartItem) => cartItem.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addCart, removeCart, updateCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
