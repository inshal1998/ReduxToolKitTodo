import React, { useState,useEffect } from 'react'
import { useSelector ,useDispatch } from "react-redux";
import { createTodo, deleteTodo, getAllTodo } from "../../reudux/reducers/TodoReducer";
import { logout } from "../../reudux/reducers/authReducer";
export default function Todo() {
    const [myTodo, setmyTodo] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getAllTodo())
        return () => {
            console.log("Clean Up");
        }
    }, [])
    const addTodos = ()=>{
        dispatch(createTodo({todo:myTodo}))
    }
    const todos = useSelector(state=>state.todos)
    return (
        <div>
            <input
                placeholder='Write Todo Here'
                value={myTodo}
                onChange={(e)=>{
                    setmyTodo(e.target.value)
                }}
            />
            <button
                className='btn #3d5afe indigo accent-3'
                onClick={()=>{
                    addTodos()
                    setmyTodo('')
                }}
            >Add todo
            </button>
            <ul className='collection'>
                {
                    todos.map(item =>{
                        return(
                            <li className="collection-item" key={item._id} onClick={()=>{dispatch(deleteTodo(item._id))}}>{item.todo}</li>
                        )
                    })
                }
            </ul>

            <button
                className='btn #3d5afe indigo accent-3'
                onClick={()=>{
                    dispatch(logout())
                }}
            >Logout
            </button>
        </div>
    )
}
