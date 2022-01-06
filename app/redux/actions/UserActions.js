import { createAction } from "@reduxjs/toolkit";

export const changeStatus = createAction('CHANGE_STATUS')

    // OLD WAY ACTIONS
// export default(status)=>{
//     return{
//         type:'CHANGE_STATUS',
//         payload:status
//     }
// }