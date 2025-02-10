import React from 'react'
import NikeLogo from "../Images/Nike_Logo.webp"
import "./Navbar.css"

const NavBar = () => {
  return (
    <div >
        <nav className='navBar'>
            <img className='logo' src={NikeLogo} alt="Nike Logo" />
            
                <div className='navLinkBar'>
                    <p className='navLinks'>Menu</p>
                    <p className='navLinks'>Location</p>
                    <p className='navLinks'>About</p>
                    <p className='navLinks'>Contact</p>
                </div>
                <button className='loginBtn'>Login</button>
            
        </nav>
      
    </div>
  )
}

export default NavBar;
