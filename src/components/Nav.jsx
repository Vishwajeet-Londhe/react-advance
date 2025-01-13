import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Nav() {
  return (
    <div>
      <nav className='mt-10 flex justify-center gap-10'>
      <NavLink style={{color: "red"}} to="/">Home</NavLink>
      <NavLink to="/user">User</NavLink>
      <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  )
}

export default Nav
