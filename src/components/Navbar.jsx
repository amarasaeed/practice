import React from 'react'
import './Navbar.css'


 function Navbar() {
  return (
    <div>
        <nav className='navbar'>
          <img src='/images/favicon.ico'></img>
            <div className='nav-items'>
                <a>home</a>
                <a>blog</a>
                <a>contact</a>
                <a>about</a>

            </div>
        </nav>
    </div>
  )
}
export default Navbar
