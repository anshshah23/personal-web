import React from 'react'
import LogoImg2 from '../images/logo2.png'
const Logo = () => {
  return (
    <div className='flex cursor-auto'>
      <img src={LogoImg2} alt="" className='h-10' />
      <p className='font-bold text-white text-3xl'>Ansh</p>
    </div>
  )
}

export default Logo