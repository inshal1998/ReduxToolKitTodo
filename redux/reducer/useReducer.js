import { createReducer,createSlice } from "@reduxjs/toolkit";


// import { updateId , updateAge , updateName } from "../actions/useActions";

const initialState = {
    id: 0,
    name: "Inshal",
    age: "23",
}

// By using CraeteSlice We Can write Action and Reducer in One Place
const userReducer = createSlice({
    name: "person", // can be named Anything
    initialState, // initial state From Up
    reducers:{
        updateName(action,state){
            state.name = action.payload
        },
        updateAge(action,state){
            state.age = action.payload
        },
        updateId(action,state){
            state.id = action.payload
        }
        
    }
})
export const {updateName,updateAge,updateId} = userReducer.actions // For Actions

export default userReducer.reducer // For Reducers

                // NEW WAY ...
// export default createReducer(initialState, (builder)=>{
//     builder.addCase(updateAge,(state,action)=>{
//         state.age = action.payload
//     })
//     // builder.addCase(updateName,(state,action)=>{
//     //     state.name = action.payload
//     // })
//     builder.addCase(updateId,(state,action)=>{
//         state.id = action.payload
//     })
// } )


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
