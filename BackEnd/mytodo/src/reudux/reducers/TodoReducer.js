import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi,fetchApiGet } from "../../app/helpers/fetchApi";
const initialState =[]

export const createTodo = createAsyncThunk(
    'createTodo',
    async (body)=>{
        const result = await fetchApi('/createtodo',body)
        return result

    }
)
export const getAllTodo = createAsyncThunk(
    'getAllTodo',
    async (body)=>{
        const result = await fetchApiGet('/getTodo',"get")
        return result

    }
)
export const deleteTodo = createAsyncThunk(
    'deleteTodo',
    async (id)=>{
        const result = await fetchApiGet(`/delete/${id}`,"delete")
        return result

    }
)

const TodoReducer = createSlice({
    name:'todo',
    initialState,
    reducers:{

    },
    extraReducers:{
        [createTodo.fulfilled]:(state,{payload:{message}})=>{
            if(message){
                state.push(message)
            }
        },
        [getAllTodo.fulfilled]:(state,{payload:{message}})=>{
            if(message){
                return message
            }
        },
        [deleteTodo.fulfilled]:(state,{payload:{message}})=>{
                const remove_todos = state.filter(item=>{
                    return item._id !== message._id
                })
                return remove_todos
        },
     
    }
})
export default TodoReducer.reducer