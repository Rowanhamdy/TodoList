// Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {

  const [tasks, setTasks] = useState(()=>{
    // Load from localStorage on initial render
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) :[];
  });

  // Save to localStorage whenever tasks change
  useEffect(() =>{
    localStorage.setItem("tasks" ,JSON.stringify(tasks))
  },[tasks])

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (index, newText) => {
    setTasks((prev) =>
      prev.map((task, i) => (i === index ? { ...task, text: newText } : task))
    );
  };
  

  // Pass all props to nested routes
  return <>
  
    <Outlet
      context={{
        tasks,
        addTask,
        deleteTask,
        toggleCompletion,
        editTask,
        
      }}
    />
  </>
}
