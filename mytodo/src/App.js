import React from 'react';
import './App.css';
import {Auth , Todo} from './app/components';
import { useSelector , useDispatch } from "react-redux";
function App() {
  const token = useSelector(state => state.user.token)
  return (
    <div className="App">
      {
        token ? <Todo/>:<Auth/>
      }
    </div>
  );
}

export default App;
