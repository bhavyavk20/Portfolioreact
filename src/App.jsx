import React, { useContext } from 'react'
import { Link,Outlet } from 'react-router-dom'
import './App.css';

export const App = () => {

  
  return (
    <>
    <div className='home'>
    <li><Link to='/'>Home</Link></li>
      <li><Link to='/Reg'>Register</Link></li>
      <li><Link to='/Login'>Login</Link></li>
    </div>
   <Outlet/>
    </>
  )
}
