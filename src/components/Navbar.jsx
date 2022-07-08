import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Navbar() {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <Link to='/'>
          <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 via-blue-300 to-blue-900 cursor-pointer'>FREEMOVS2U</h1>
        </Link>
        {user?.email ? (<div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          
            <button onClick={handleLogout} className='bg-gradient-to-tr from-blue-900 via-gray-800 to-blue-900  px-6 py-2 rounded cursor-pointer text-white font-medium shadow-md hover:shadow-slate-600 duration-500'>Log Out</button>
          
        </div>) : (<div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-gradient-to-tr from-blue-900 via-gray-800 to-blue-900  px-6 py-2 rounded cursor-pointer text-white font-medium shadow-md hover:shadow-slate-600 duration-500'>Sign Up</button>
          </Link>
        </div>)}
      </div>
    </>
  )
}

export default Navbar