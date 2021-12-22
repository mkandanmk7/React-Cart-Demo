import * as redux from "redux";
import CartReducer from "./CartReducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = redux.combineReducers({
  cart: CartReducer,
});

const persistConfig = {
  key: "localData",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = redux.createStore(persistedReducer);

export const persistor = persistStore(store);
