import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice/shopSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartSlice from "../features/shopSlice/cartSlice";
import { authApi } from "../services/authService";
import authReducer from "../features/auth/authSlice";

export default configureStore({
  reducer: {
    authReducer,
    cartSlice,
    shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(configureStore.dispatch);
