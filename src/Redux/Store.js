import * as redux from "redux";
import CartReducer from "./CartReducer";

const rootReducer = redux.combineReducers({
  cart: CartReducer,
});

export const store = redux.createStore(rootReducer);
