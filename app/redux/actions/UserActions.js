import { CHANGE_AGE , CHANGE_STATUS , CHANGE_NAME } from "./actions.types";
import { createAction } from "@reduxjs/toolkit";

export const changeName = createAction(CHANGE_NAME)
export const changeAge = createAction(CHANGE_AGE)
export const changeStatus = createAction(CHANGE_STATUS)

    // OLD WAY ACTIONS
// export default(status)=>{
//     return{
//         type:'CHANGE_STATUS',
//         payload:status
//     }
// }