import React from 'react'
import './header.css'
import{AiOutlineHome} from 'react-icons/ai'
import{RiContactsFill} from 'react-icons/ri'
import{ImInfo} from 'react-icons/im'
import{IoMdLogIn} from 'react-icons/io'
import{TbError404} from 'react-icons/tb'
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
                        <Link to="/contact"><RiContactsFill/> Contact</Link>
                        <Link to="/about"><ImInfo/> About</Link>
                        {/* <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}><ImInfo/> About</a> */}
                        <Link to="/Notfound"><TbError404/> Notfound</Link>
                        <Link to="/login" ><IoMdLogIn/>Login</Link>   
                    </div>        
            </div>
            
        </header>
        
  )
}

export default Header