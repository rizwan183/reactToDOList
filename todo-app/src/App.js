import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
function App() {

  const [todos,setTodos] = useState([1,2,3,4,5,6,7,8,9,10]); 
  const [input,setInput] = useState("");

  const addTodo = (event) =>{

      event.preventDefault(); //will stop refresh
      setTodos([...todos,input]);
      console.log('i m working')
      setInput('')// clearing inputs
  }

  return (
    <div className="App">
      <h1> Hello World </h1>

      <form>
          <input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
              Add To-Do
          </Button>
      </form>

    {/*
        multiline comment reactjs -> html
        <!--//input field-->
      // <input value={input} onChange={event => setInput(event.target.value)}/> 
     // <button onClick={addTodo}> Add Todo </button> -->
    */}
      <ul>
        {todos.map(todo => (
            <li> {todo} </li>
          ))}
      </ul>

    </div>
  );
}

export default App;
