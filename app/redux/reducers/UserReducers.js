import { createReducer , createSlice} from "@reduxjs/toolkit";
// import { CHANGE_NAME } from "../actions/actions.types";
// import { changeAge ,fetchName, changeStatus } from "../actions/UserActions";

const initialState = {
    name:"Inshal",
    age:23,
    status:'coder'
}
            // If we Use CreateSlice We Can Delete Actions File , The name given to reducers will be the name of Actions

const UserReducers = createSlice({
    name:'Person', // we Can give any name
    initialState, // same as previous initialstate concept
    reducers:{
        changeName (state,action){
            state.name = action.payload
        },
        changeAge (state,action){
            state.age = action.payload
        },
        changeStatus  (state,action){
            state.status = action.payload
        }
        
    }
})

export const {changeAge, changeName , changeStatus} = UserReducers.actions // Exporting actions same name as Reducers will be assigned

export default UserReducers.reducer // Exporting Reducers

                     // This is same as  oldway we have to create Actions & Reducers so We can use CreateSlice() 
// const UserReducer =createReducer(initialState , (builder)=>{ //Switch statement update payload like {...state}  not required 
//     builder.addCase(CHANGE_NAME , ( state , action)=>{
//         state.name = action.payload
//     })
//     builder.addCase(changeAge , ( state , action)=>{
//         state.age = action.payload
//     })
//     builder.addCase(changeStatus , ( state , action)=>{
//         state.status = action.payload
//     })
// })
// export default UserReducer


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

