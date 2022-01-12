import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

initialState = {
    token:'',
    error:'',
    mesage:''
}

export const fetchName = createAsyncThunk(
    
)

const AuthReducer = createSlice({
    name:'Auth',
    initialState,
    reducers:{

    }
})
export default AuthReducer.reducer