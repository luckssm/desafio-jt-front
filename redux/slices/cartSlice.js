import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    setCart: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentCart = (state) => state.cart;
