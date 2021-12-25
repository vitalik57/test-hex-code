import { createReducer } from "@reduxjs/toolkit";
import { addNewHex, delateHex } from "../action/hexAction";
export const hexReducer = createReducer([], {
  [addNewHex]: (state, { payload }) => [...state, payload],
  [delateHex]: (state, action) => state.filter(cartItem => cartItem.id !== action.payload)
});
