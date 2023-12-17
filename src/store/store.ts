import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import wishlistReducer from "./wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishilist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
