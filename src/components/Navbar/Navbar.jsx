import React, { useState } from 'react'
import './Navbar.css';
import Logo from '../../assets/logo.png';
import Contact from '../../assets/contact.png';
import {Link} from 'react-scroll';
import Menu from '../../assets/menu.png'
function Navbar() {
  const[showMenu,setShowMenu]=useState(false)
  return (
    <div className='navbar'>
      
      {/* Logo */}
      <img src={Logo} alt="" className='logo' />


      {/* Navbar elements */}
      <div className="desktopMenu">
        <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuItems">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-25} duration={500}  className="desktopMenuItems">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-25} duration={500}  className="desktopMenuItems">Portfolio</Link>
       </div>
      {/* Contact me button */}
      <button className='contactMeBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'})
      }}>
        <img src={Contact} alt="" className="contactMeImg" />
        Contact Me!
      </button>
    
    {/* mobile menu */}
    <img src={Menu} alt="" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
    <div className="mobileMenu" style={{display:showMenu ? 'flex': 'none'}}>
  <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}  className="MenuItems" onClick={()=>setShowMenu(false)}>Home</Link>
  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-25} duration={500}  className="MenuItems" onClick={()=>setShowMenu(false)}>About</Link>
  <Link activeClass='active' to='works' spy={true} smooth={true} offset={-75} duration={500}  className="MenuItems" onClick={()=>setShowMenu(false)}>Portfolio</Link>
  <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-25} duration={500}  className="MenuItems" onClick={()=>setShowMenu(false)}>Contact</Link>
 </div>
    </div>
  )
}

export default Navbar