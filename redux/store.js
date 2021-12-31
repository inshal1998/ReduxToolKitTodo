import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./reducer/useReducer";

const store = configureStore({
    reducer: userReducer
})

export default store