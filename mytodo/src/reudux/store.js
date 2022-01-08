import { configureStore } from '@reduxjs/toolkit';
import authReducer  from "./reducers/authReducer";
export const store = configureStore({
  reducer: {
    user: authReducer,
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
