import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import dropDownReducer from "./slices/DropMenu";
import cartReducer from "./slices/cartSlice";
const rootReducer = combineReducers({
  user: userReducer,
  dropMenu: dropDownReducer,
  cart: cartReducer,
});

export default rootReducer;
