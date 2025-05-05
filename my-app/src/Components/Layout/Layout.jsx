import React from 'react'
import NavBar from '../NavBar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
 
  return <>
  <NavBar />
  <div className="container">
    <Outlet ></Outlet>
  </div>
  </>
}
