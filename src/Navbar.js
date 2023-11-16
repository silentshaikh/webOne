import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import {RiMenu3Line} from 'react-icons/ri';
import {AiFillCloseCircle} from 'react-icons/ai';
function Navbar() {
  const [showNav,upShowNav] = useState(false);
  return (
    <nav className='navbar'>
    <div className="logo">
        <h1>Our Portfolio</h1>
    </div>
    <div className="navIcon">
    <RiMenu3Line className='open' onClick={() => upShowNav(true)}/>
      </div>
      <div className="nav-list">
      <ul className={showNav ? "li-list listActive" : 'li-list'}>
        <li onClick={() => upShowNav(false)}><NavLink className='lnk' to='/'>Home</NavLink></li>
        <li onClick={() => upShowNav(false)}><NavLink className='lnk' to='/about'>About</NavLink></li>
        <li onClick={() => upShowNav(false)}><NavLink className='lnk' to='/services'>Services</NavLink></li>
        <li onClick={() => upShowNav(false)}><NavLink className='lnk' to='/contact'>Contact</NavLink></li>
       
      <div className="navIcon2">
      <AiFillCloseCircle className='close' onClick={() => upShowNav(false)}/>
      </div>
      </ul>

      </div>
      
    </nav>
  )
}

export default Navbar
