import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import TodoList from './Components/TodoList/TodoList.jsx';
import TodoItem from './Components/TodoItem/TodoItem.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import AddTodo from './Components/AddTodo/AddTodo.jsx';
import Guard from './Components/Guard/Guard.jsx';
import Logout from './Pages/Logout.jsx';
import NotFound from './Pages/NotFound.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const routers = createBrowserRouter([
  {path:"/" ,element:<Layout /> ,children:[
    { index: true, element: <Home /> },
    { path: "items", element: <TodoItem /> },
    { path: "signup", element: <Signup /> },
    { path: "login", element: <Login /> },
    { path: "logout", element: <Logout /> },
    {
      path: 'dashboard',
      element:<Guard> <Dashboard /></Guard>,
      children: [
        { path: 'add', element: <AddTodo /> },
        { path: "list", element:<TodoList />   } 
      ]
    },
    { path: "*", element: <NotFound /> },


  ]}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={routers} />

    </AuthProvider>
    
    
    
  </StrictMode>,
)
