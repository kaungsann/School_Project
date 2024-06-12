import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";

import { authApi } from "./services/authAPI";
import { productApi } from "./services/ProductApi";

export const resetStore = createAction("RESET_STORE");

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "product"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  [authApi.reducerPath]: authApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
});

const resettableReducer = (state, action) => {
  if (action.type === resetStore.type) {
    state = undefined;
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, resettableReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, productApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
