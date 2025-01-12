import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
      <nav className='mt-10 flex justify-center gap-10'>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

export default Nav
