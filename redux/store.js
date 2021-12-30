import { configureStore } from "@reduxjs/toolkit";
import uerReducer  from "./reducer/useReducer";

const store = configureStore({
    reducer: uerReducer
})

export default store