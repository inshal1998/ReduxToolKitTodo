import { createReducer } from "@reduxjs/toolkit";
import { updateId , updateAge , updateName } from "../actions/useActions";
const initialState = {
    id: 0,
    name: "Asad",
    age: "23",
}
                // NEW WAY ...
export default createReducer(initialState, (builder)=>{
    builder.addCase(updateAge,(state,action)=>{
        state.age = action.payload
    })
    builder.addCase(updateName,(state,action)=>{
        state.name = action.payload
    })
    builder.addCase(updateId,(state,action)=>{
        state.id = action.payload
    })
} )

                // OLD WAY ...
// export default (state =initialState ,action)=>{
//     switch(action.type){
//         case "UPDATE_AGE":
//             return {
//                 ...state,
//                 age:action.payload
//             }
//         default:
//             return state;
//     }
// }
