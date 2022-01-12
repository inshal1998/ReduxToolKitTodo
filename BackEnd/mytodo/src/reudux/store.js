import { configureStore } from '@reduxjs/toolkit';
import authReducer  from "./reducers/authReducer";
import TodoReducer  from "./reducers/TodoReducer";

export const store = configureStore({
  reducer: {
    user: authReducer,
    todos:TodoReducer
  },
});

  //Above user will be like this
// {
//   user:{
//     token:''
//     loading:''
//     error:''
//   }
// }
