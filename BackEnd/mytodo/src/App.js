import React, { useEffect } from 'react';
import './App.css';
import {Auth , Todo} from './app/components';
import { useSelector , useDispatch } from "react-redux";
import { addToken } from "./reudux/reducers/authReducer";
function App() {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addToken())
    return () => {
      console.log('CleanUp');
    }
  }, [])
  return (
    <div className="App">
      {
        token ? <Todo/>:<Auth/>
      }
    </div>
  );
}

export default App;
