import React, { useState } from 'react'
export default function TodoItem({index ,task,toggleCompletion ,deleteTask , editTask}) {
    const [isEdit , setIsEdit] = useState(false);
    const [newText , setNewText] = useState(task?.text ||'');

    if (!task) return null; // avoid rendering if task is undefined

    function handelToggle(){
        toggleCompletion(index)
    }
    function handelDelete(){
        if (window.confirm(`Do you really want to delete record ${index} ?`)) {
        deleteTask(index)}
    }
    function handleEdit(){
    setIsEdit(true)
    }
    function hadelSaveEdit(){
        editTask(index,newText);
        setIsEdit(false)
    }
  return <>
    <li style={{textDecoration:task.completed ? 'line-through':'none' ,cursor:'pointer'}}>
        {isEdit?(
            <div className='mt-4'>
            <input type='text' value={newText} className='mt-4'
            onChange={(e) => setNewText(e.target.value)}/>
            <button onClick={hadelSaveEdit} className="btn bg-info ms-5 text-white">Save</button>
            </div>
        ):(
            
        <div className="d-flex justify-content-between">
            <div className='mt-4'>
            <span onClick={handelToggle}>{task.text}</span>
            </div>
            <div  className="mt-4">
            <button onClick={handleEdit} className="btn bg-warning text-white me-5 mb-3">Edit</button>
            <button className="btn bg-danger text-white me-5 mb-3" onClick={handelDelete} >Delete</button>
            </div>
        </div>)}
    </li>
    </>
}
