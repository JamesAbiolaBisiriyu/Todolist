import React, { useState } from 'react'


// export const TodoForm = ({ editTodo, task }) => {
  export const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("")


  const handleSubmit = e => {
    e.preventDefault();

    // editTodo(value, task.id);
    addTodo(value)
    
    setValue("")
  }
  return (
    <form className='TodoForm'onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value=
        {value} placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>
        Update Task
      </button>
    </form>
  )
}