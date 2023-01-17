import React from 'react'
import './header.css'
import{AiOutlineHome} from 'react-icons/ai'
import{RiContactsFill} from 'react-icons/ri'
import{ImInfo} from 'react-icons/im'
import { useState } from 'react'

const Header = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
        <header className='header'>
            <a href="#" className="logo">
                Firas
            </a>
            <div className="header-right">
                <a onClick={() => setActiveNav('#') } className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/> Home</a>
                <a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}><RiContactsFill/> Contact</a>
                <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}><ImInfo/> About</a>
            </div>
        </header>
  )
}

export default Header