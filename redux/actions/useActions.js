import { createAction } from "@reduxjs/toolkit";
import { UPDATE_AGE , UPDATE_ID , UPDATE_NAME } from "./actions.types";

export const updateName = createAction(UPDATE_NAME)
export const updateAge = createAction(UPDATE_AGE)
export const updateId = createAction(UPDATE_ID)


//     OLD WAY
// export default (status)=>{
//     return {
//         type :'UPDATE_ID',
//         payload : status 
//     }
//}