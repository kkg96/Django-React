import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full max-w-full bg-gray-900 p-5'>
      <div className='justify-items-end text-xm '>
        <ul className='flex flex-row items-center gap-3 text-white'>
          <button className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-3 rounded-2xl'>
            <NavLink to="/" className={(isActive) =>
              `block ${isActive ? "text-white" : "text-blue-500"}`
            }>
              <li className='font-sans basis-16'>Home</li>
            </NavLink>
          </button>
          <button className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-3 rounded-2xl'>
            <NavLink to={'/about'}>
              <li className='font-sans basis-16'>About</li>
            </NavLink>
          </button>
          <button className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-3 rounded-2xl'>
            <NavLink to={'/login'}>
              <li className='font-sans basis-16'>Login</li>
            </NavLink>
          </button>
          <button className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-3 rounded-2xl'>
            <NavLink to={'/signup'}>
              <li className='font-sans basis-16'>SignUp</li>
            </NavLink>
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header