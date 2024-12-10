
import { useState } from 'react'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {
  const [todos,setTodos]=useState([]);
  const createTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);
  }
  const removeTodo=(todoid)=>{
    setTodos([...todos.filter( (todo) => todo.id!==todoid)]);

  }
  const updateTodo=(newtodo)=>{
    const updateTodos=todos.map((todo)=>{
      if(todo.id!==newtodo.id){
        return todo;
      }else return newtodo;
    })
    setTodos([...updateTodos]);
  }
  return (
    <div className='app-div'>
      <ToDoCreate onCreateTodo={createTodo}/>
      <ToDoList todos={todos} onRemoveTodo={removeTodo} updateTodo={updateTodo} ></ToDoList>
    </div>
  )
}

export default App
