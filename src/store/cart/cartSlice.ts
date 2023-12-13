import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces";

interface cartState {
  products: IProduct[];
}

const initialState: cartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index].quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      const curProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (curProduct) {
        curProduct.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const curProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (curProduct) {
        curProduct.quantity -= 1;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
