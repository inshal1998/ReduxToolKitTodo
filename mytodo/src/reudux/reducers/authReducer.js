import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    token:'',
    loading :false,
    error:''
}

export const signUpUser = createAsyncThunk(
    'signUpUser',
    async (body)=>{
        //localhost:5000/signUp
        const result = await fetch('/signUp',{
            method:'post',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(body)
        })
        return await result.json()
    }
)

const authReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
    },
    extraReducers:{
        [signUpUser.fulfilled]:(state,action)=>{
            state.laoding = false
            if(action.payload.error){
                state.error = action.payload.error //bcoz we returning error as json 
            }
        },
        [signUpUser.pending]:(state, action)=>{
            state.loading = true
        }
        
    }
})
export default authReducer