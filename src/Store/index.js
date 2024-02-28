import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice/shopSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartSlice from "../features/shopSlice/cartSlice";

export default configureStore({
  reducer: {
    cartSlice,
    shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(configureStore.dispatch);
