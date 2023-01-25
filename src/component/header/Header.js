import React from 'react'
import './header.css'
import{AiOutlineHome} from 'react-icons/ai'
import{RiContactsFill} from 'react-icons/ri'
import{ImInfo} from 'react-icons/im'
import{IoMdLogIn} from 'react-icons/io'
import { useState } from 'react'
import {Routes, Route, useNavigate, Link } from "react-router-dom";
import Login from '../Login/Login'

const Header = () => {
    const [activeNav, setActiveNav] = useState('#')
    const navigate = useNavigate();

    const navigateToLogin = () => {
        // 👇️ navigate to /contacts
        navigate('/login');
    };

  return (
        <header className='header'>
            <a href="#" className="logo">
                Firas
            </a>
            <div className="header-right">
                <a onClick={() => setActiveNav('#') } className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/> Home</a>
                <a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}><RiContactsFill/> Contact</a>
                <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}><ImInfo/> About</a>
                <Link to="/login">Login</Link>
                <Routes>
                    <Route path="/login" component={Login}/>  
                    
                </Routes>
                {/* <a onClick={Login} ><IoMdLogIn/> Login</a> */}
            </div>
        </header>
  )
}

export default Header