import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return <>
  <div className="container">
    <div className='d-flex justify-content-center main'>
    <img className='w-25  mt-5' src="/images/4911411.webp" alt="" />
    </div>
    <div>
    <h2 className='text-center'>Manage your tasks</h2>

    </div>

    <div className='text-center mt-4 d-flex justify-content-center'>

        <p className='w-50'>organize, plan, and collaborate on tasks with List todo.Your busy life deserves this.you can manage checklist and your goal. </p>

    </div>
    <div className='text-center mt-4 d-flex justify-content-center main-btn'>
    <Link  className='btn ' to="signup">Get Started</Link> 

    </div>
  </div>
  </>
}
