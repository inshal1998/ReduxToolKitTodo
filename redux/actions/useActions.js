// import { createAction } from "@reduxjs/toolkit";
// import { FETCH_NAME, UPDATE_AGE , UPDATE_ID , UPDATE_NAME } from "./actions.types";

// export const fetchName = ()=>{
//     return async(dispatch)=>{
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const result = await res.json()
//         console.log("From Actions : ",result[0].name);
//         dispatch({type:FETCH_NAME , payload:result[0].name})
//     }
// }
// // export const updateName = createAction(UPDATE_NAME)
// export const updateAge = createAction(UPDATE_AGE)
// export const updateId = createAction(UPDATE_ID)



// //     OLD WAY
// // export default (status)=>{
// //     return {
// //         type :'UPDATE_ID',
// //         payload : status 
// //     }
// //}