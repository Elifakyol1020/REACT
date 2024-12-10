import React from 'react'
import ToDo from './ToDo'

function ToDoList({todos,onRemoveTodo,updateTodo}) {
  return (
    <div className='list-div'>
        {
            todos && todos.map((todo)=>(
                <ToDo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} updateTodo={updateTodo}/>
            ))
        }
    </div>
  )
}

export default ToDoList
