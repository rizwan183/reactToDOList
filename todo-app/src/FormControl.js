import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './ToDo.css'
import './App.css';
import ToDo from './ToDo';
import db from './firebase';
import firebase from './firebase';
import { Button ,FormControl,InputLabel,Input, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
function FormControl1() {

  const [todos,setTodos] = useState([]); 
  const [input,setInput] = useState("");

  useEffect(() => {
    // this code loads when then this script loads
    db.collection('todos').onSnapshot(snapshot =>{
      console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
    })
  }, [])

  const addTodo = (event) =>{

      event.preventDefault(); //will stop refresh

      //firebasestorage
      db.collection('todos').add({
        todo:input
      })
      //localstorage
      // setTodos([...todos,input]);
      // console.log('i m working')
      setInput('')// clearing inputs
  }

  return (
    <div className="App">
      <h1> Hello World </h1>

      <form>
      		<FormControl>
				  <InputLabel htmlFor="my-input">Write Your Todo</InputLabel>
				  <Input value={input} onChange={event => setInput(event.target.value)} />
			</FormControl>
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
        //{/*<li>{todo}</li>*/},
          <List className='todo_list'>
            <ListItem>
              <ListItemAvatar>
              </ListItemAvatar>
              <ListItemText primary={todo.todo} secondary='test data'/>
            </ListItem>
            <Button onClick={event=>db.collection('todos').doc(todo.id).delete()}> Delete </Button>
          </List>

          ))}
      </ul>

    </div>
  );
}
export default FormControl1;
