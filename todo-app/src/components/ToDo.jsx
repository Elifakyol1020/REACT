import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../css/ToDo.css'
import '../css/ToDoCreate.css'
function ToDo({todo,onRemoveTodo,updateTodo}) {
  const [editTable,setEditTable]=useState(false);
  const [newtodo,setNewTodo]=useState(todo.content);
    const removeTodo=()=>{
        onRemoveTodo(todo.id);
    }
    const OnUpdateTodo=()=>{
      const request={
        id:todo.id,
        content:newtodo
      }
      updateTodo(request);
      setEditTable(false);
    }
  return (
    <div className='todo-single-div'>
        <div className='todo-single-div1'>
        <div className='todo-list-div'>
        <p>
          {
            editTable? <input className='update-input'
            value={newtodo} onChange={(e)=>setNewTodo(e.target.value)} type="text"/>: todo.content
          }
        </p>
      </div>
      <div> 
        <IoIosRemoveCircle onClick={removeTodo} className='icon' /> 
        {
          editTable?  <FaCheck className='icon' onClick={OnUpdateTodo}/>:<FaEdit className='icon' onClick={()=>setEditTable(true)} />
        }
      </div>
        </div>
    </div>
  )
}

export default ToDo
