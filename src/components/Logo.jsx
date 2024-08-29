import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img className='rounded-2xl' src={logo} alt='Logo' style={{width}} />
    </div>
  )
}

export default Logo