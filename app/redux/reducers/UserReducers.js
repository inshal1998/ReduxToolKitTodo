import { createReducer } from "@reduxjs/toolkit";
import { CHANGE_NAME } from "../actions/actions.types";
import { changeAge ,fetchName, changeStatus } from "../actions/UserActions";
const initialState = {
    name:"Inshal",
    age:23,
    status:'coder'
}
const UserReducer =createReducer(initialState , (builder)=>{
    builder.addCase(CHANGE_NAME , ( state , action)=>{
        state.name = action.payload
    })
    builder.addCase(changeAge , ( state , action)=>{
        state.age = action.payload
    })
    builder.addCase(changeStatus , ( state , action)=>{
        state.status = action.payload
    })
})
export default UserReducer

                    // OLD WAY
// const userReducer =  (state=initialState , action)=>{
//     switch (action.type) {
//         case 'CHANGE_NAME':
//             return{
//                 ...state,
//                 name:action.payload
//             }
//         default:
//             return state;
//     }
// }

