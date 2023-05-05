import { combineReducers } from "redux";
import cartReducer from "./cartSlice"; // import the cart reducer

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
