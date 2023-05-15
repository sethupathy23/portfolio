import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
    <div className='nav'>Navbar
    <div className="nav-container">
        <div className="nav-logo">
            {/* <img src={logo} alt="" /> */}
        </div>
        <div className="nav-items">
            <ul className='ul'>
                {/* <li><a href="#home">Home</a></li> */}
                <li><a href="#aboutme">About Me</a></li>
                <li><a href="#education">Education and Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#home">Home</a></li>
             </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar