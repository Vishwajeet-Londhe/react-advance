// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'


// function Nav() {
//   return (
//     <div>
//       <nav className='mt-10 flex justify-center gap-10'>
//       <NavLink style={(e)=>{
//         return {color: e.isActive ? 'green' : '',
//             fontWeight: e.isActive ? 'bold' : '',
//         };
//       }} to="/">Home</NavLink>
    
//       <NavLink style={(e)=>{
//         return {color: e.isActive ? 'green' : '',
//             fontWeight: e.isActive ? 'bold' : '',
//         };
//       }} to="/user">User</NavLink>
      
//       <NavLink style={(e)=>{
//         return {color: e.isActive ? 'green' : '',
//             fontWeight: e.isActive ? 'bold' : '',
//         };
//       }} to="/about">About</NavLink>
//       </nav>
//     </div>
//   )
// }

// export default Nav


import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Nav() {
  return (
    <div>
      <nav className='mt-10 flex justify-center gap-10'>
      <NavLink className={(e)=>{
         return [
            e.isActive? 'text-red-300': '',
            e.isActive? "font-bold" : '',
        ].join(" ");
      }} to="/">Home</NavLink>
    
      <NavLink className={(e)=>{
         return [
            e.isActive? 'text-red-300': '',
            e.isActive? "font-bold" : '',
        ].join(" ");
      }} to="/user">User</NavLink>
      
      <NavLink className={(e)=>{
        return [
            e.isActive? 'text-red-300': '',
            e.isActive? "font-bold" : '',
        ].join(" ");
      }} to="/about">About</NavLink>
      </nav>
    </div>
  )
}

export default Nav
