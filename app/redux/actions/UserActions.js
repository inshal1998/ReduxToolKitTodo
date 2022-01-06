// When Using CreatSlice in Reducer We Can Delet this 

import { CHANGE_AGE , CHANGE_STATUS , CHANGE_NAME } from "./actions.types";
import { createAction } from "@reduxjs/toolkit";

            // This is same as  oldway we have to create Actions & Reducers so We can use CreateSlice() 
export const fetchName = ()=>{
    return async (dispatch)=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
        console.log(result[0].name);
        dispatch({
            type:CHANGE_NAME,
            payload:result[0].name
        })    
    }
}

export const changeAge = createAction(CHANGE_AGE)
export const changeStatus = createAction(CHANGE_STATUS)

    // OLD WAY ACTIONS
// export default(status)=>{
//     return{
//         type:'CHANGE_STATUS',
//         payload:status
//     }
// }