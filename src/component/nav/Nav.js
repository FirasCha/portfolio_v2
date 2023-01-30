import React from 'react'
import './nav.css'
import{AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import{BiMessageSquareDetail} from 'react-icons/bi'
import{ImInfo} from 'react-icons/im'
import{RiLoginCircleLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href='/' onClick={() => setActiveNav('#') } className={activeNav === '#' ? 'active' : ''}>
            <AiOutlineHome/>
        </a>
        <a href='/about' onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}>
            <AiOutlineUser/>
        </a>        
        <a href='/contact' onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}>
            <BiMessageSquareDetail/>
        </a>
        <a href='/about' onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}>
            <ImInfo/>
        </a>
        <a href='/login' onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}>
            <RiLoginCircleLine/>
        </a>
    </nav>
  )
}

export default Nav