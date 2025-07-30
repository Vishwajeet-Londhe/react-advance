// import React from 'react'

// function User() {
//   return (
//     <div>
//       <div className='w-1/2 m-auto mt-10 '>
//       <h1 className='text-red-200 text-5xl'>User Page</h1>

//       <p className='mb-2 text-pink-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores quod deleniti quidem facilis molestiae voluptates quisquam incidunt eveniet ut!</p>
//       <button className='text-white p-3 rounded-lg bg-yellow-400 px-2 py-1'>Explore User More</button>
//     </div>
//     </div>
//   )
// }

// export default User




import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div>
      <div className='w-1/2 m-auto mt-10 '>
      <h1 className='text-red-200 text-5xl'>User Page</h1>
        <div className='flex w-1/2 flex-col mt-5'>
          <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-500 hover:font-bold' to="/user/vishwajeet">Vishwajeet</Link>
          <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-yellow-500 hover:font-bold' to="/user/anushka">Anushka</Link>
          <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-green-500 hover:font-bold' to="/user/apurva">Apurva</Link>
          <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-violet-500 hover:font-bold' to="/user/tahseen">Tahseen</Link>

          <div className='flex wt-1/2 flex-col mt-10'>
            <Link className='p-3 bg-red-200 mb-3 hover:bg-red-300 '
            to="/user/john "
            >John</Link>

            <Link className='p-3 bg-red-200 mb-3 hover:bg-red-300 '
            to="/user/ayush"
            >Ayush</Link>

            <Link className='p-3 bg-red-200 mb-3 hover:bg-red-300 '
            to="/user/vaibhavi"
            >vaibhavi</Link>

          </div>

        </div>
      </div>      
    </div>      
  )
}

export default User
