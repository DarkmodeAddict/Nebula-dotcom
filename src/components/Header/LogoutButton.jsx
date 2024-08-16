import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutButton() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button className='font-bold font-serif sm:text-xl inline-block px-1 sm:px-10 py-4 duration-200 hover:bg-gray-800 rounded-full' onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutButton