import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer"; "./reducers/AuthReducer";

export const store = configureStore({
    reducer:AuthReducer,
})