import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice/shopSlice";

export default configureStore({
  reducer: {
    shopReducer,
  },
});
