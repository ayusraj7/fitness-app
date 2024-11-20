import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    total: localStorage.getItem("total")
      ? JSON.parse(localStorage.getItem("total"))
      : 0,
    totalItems: localStorage.getItem("totalItems")
      ? JSON.parse(localStorage.getItem("totalItems"))
      : 0,
  },
  reducers: {
    setCartItems(state, value) {
      const item = value.payload;
      const itemsPresent = state?.cartItems?.filter(
        (value) => value._id === item._id
      );
      if (itemsPresent.length === 0) {
        state.cartItems.push(value.payload);
        state.total = state.total + value.payload.price;
        state.totalItems = state.totalItems + 1;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

        toast.success("Course added to cart");
      } else {
        toast.error("Course already in cart");
      }
    },
    removeFromCart: (state, action) => {
      if (state.totalItems > 0) {
        const item = action.payload;
        state.cartItems.filter((element) => element._id === item._id);
        state.total = state.total - action.payload.price;
        state.totalItems = state.totalItems - 1;
        toast.success("Items Removed Successfully");
      }
    },
    resetCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.totalItems = 0;
      localStorage.removeItem("cartItems");
      localStorage.removeItem("total");
      localStorage.removeItem("totalItems");
      toast.success("Cart reset Successfully");
    },
  },
});

export const { setCartItems, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
