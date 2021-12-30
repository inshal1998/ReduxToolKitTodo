import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    name: "Asad",
    age: "23",
}

export default createReducer(initialState, (builder)=>{
    builder.addCase("UPDATE_AGE",(state,action)=>{
        state.age = action.payload
    })
    builder.addCase("UPDATE_NAME",(state,action)=>{
        state.name = action.payload
    })
    
} )

                // OLD WAY
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
