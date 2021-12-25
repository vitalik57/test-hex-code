import { configureStore } from "@reduxjs/toolkit";
import { hexReducer } from "./reducer/hexReducer";
export const store = configureStore({
  reducer: {
    hex: hexReducer
  }
});
