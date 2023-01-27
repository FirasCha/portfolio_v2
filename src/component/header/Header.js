import React from 'react'
import './header.css'
import{AiOutlineHome} from 'react-icons/ai'
import{RiContactsFill} from 'react-icons/ri'
import{ImInfo} from 'react-icons/im'
import{IoMdLogIn} from 'react-icons/io'
import { useState } from 'react'
import {Link} from "react-router-dom";


const Header = () => {
    const [activeNav, setActiveNav] = useState('#')
    

  return (
        <header className='header'>
            <div>
                
                    <Link to="/" className="logo">
                        Firas
                    </Link>
                    <div className="header-right">                    
                        <Link to="/"><AiOutlineHome/> Home</Link>
                        <Link to="/Notfound"><RiContactsFill/> Contact</Link>
                        <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}><ImInfo/> About</a>
                        <Link to="/login" ><IoMdLogIn/>Login</Link>   
                    </div>        
            </div>
            
        </header>
        
  )
}

export default Header