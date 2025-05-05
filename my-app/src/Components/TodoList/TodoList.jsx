import React from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoItem from '../TodoItem/TodoItem'
import { useOutletContext } from 'react-router-dom'
export default function TodoList() {
    const {tasks ,toggleCompletion,deleteTask, editTask} = useOutletContext()
  return (
    <div className='container mt-5'>
        <h1 className='color-head'>Todo List</h1>
        <div className='bg-list mt-5 rounded-2'>
        <ul>
        {(tasks || []).map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
        </ul>
        </div>
        
       
    </div>

  )
}
