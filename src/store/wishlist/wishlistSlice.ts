import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces";

interface wishlistState {
  products: IProduct[];
}

const initialState: wishlistState = {
  products: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        return;
      }
      state.products.push(action.payload);
    },
  },
});

export const { addItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
