import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/components/Home'
import User from '../src/components/User'
import About from '../src/components/About'
import UserDetail from '../src/components/UserDetail'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/user/:name' element={<UserDetail/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default Routing
