import React from 'react'
import LogoImg2 from '../images/logo2.png'
import './styles/Logo.css'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <div>
      <Link to="/about" className='flex'>
        <img src={LogoImg2} alt="" className='h-10' />
        <p className='font-bold text-white text-3xl logo-button'>Ansh</p>
      </Link>
    </div>
  )
}

export default Logo