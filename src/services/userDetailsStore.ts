import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./userDetailsSlice";

export const userDetailsStore = configureStore({
    reducer: userDetailsReducer
});