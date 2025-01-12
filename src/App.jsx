import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
      <Link to="/home">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

export default App
