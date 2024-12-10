import React, { useState } from 'react'
import '../css/ToDoCreate.css'
function ToDoCreate({onCreateTodo}) {
    const [newTodo,setNewTodo]=useState('');
    const clearInputs=()=>{
        setNewTodo('');
    }
    const createTodo=()=>{

        if(!newTodo){
            return; 
        }
        else{
        const request={
            id:Math.floor(Math.random()*99999999),
            content:newTodo
        }
        onCreateTodo(request);  
        clearInputs();
        }

    }
  return (
    <div className='todo-div'>
      <input value={newTodo}
      onChange={(e)=>setNewTodo(e.target.value)} className='input' type="text" placeholder='ToDo giriniz' />
      <button onClick={createTodo} className='button'>Todo Oluştur</button>
    </div>
  )
}

export default ToDoCreate
