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
export const signInUser = createAsyncThunk(
    'signInUser',
    async (body)=>{
        //localhost:5000/signUp
        const result = await fetch('/signIn',{
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
        addToken:(state,action)=>{
            state.token = localStorage.getItem('token')
        }
    },
    extraReducers:{
        [signUpUser.fulfilled]:(state,action)=>{
            state.laoding = false
            if(action.payload.error){
                state.error = action.payload.error //bcoz we returning error as json 
            }else{
                state.error = action.payload.message
            }
        },
        [signUpUser.pending]:(state, action)=>{
            state.loading = true
        },
        [signInUser.pending]:(state, action)=>{
            state.loading = true
        },
        [signInUser.fulfilled]:(state,{payload:{error , token}})=>{
            state.laoding = false
            if(error){
                state.error = error //bcoz we returning error as json 
            }else{
                state.token = token    
                localStorage.setItem('token' , token)
            }
        },   
    }
})
export const {addToken} = authReducer.actions
export default authReducer.reducer