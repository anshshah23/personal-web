import React from 'react'
import LogoImg from '../images/logo.png'
const Logo = () => {
  return (
    <div className='flex cursor-auto'>
      <img src={LogoImg} alt="" className='h-10' />
      <p className='font-bold text-white text-3xl'>Ansh</p>
    </div>
  )
}

export default Logo