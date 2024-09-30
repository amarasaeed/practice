import React from 'react'
import './Navbar.css'

function Navbar(){
  return(
    <nav className='nav'>
      
        <h2 className="logo">
          <span id="chari" >Chari</span>
          <span id="team">Team</span>
        </h2>
  
     <ul className="list-items">
      <li><a className='active'>Home</a></li>
      <li>About</li>
      <li>Causes</li>
      <li className="dropdown">Pages<i className="fas fa-chevron-down fa-xs"></i>  <ul className="dropdown-content">
        <li><a href="">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul></li>
      <li>Contact</li>
      <li id='button'>Donate Now <i className="fas fa-arrow-right"></i></li>
    </ul>
    </nav>
  )
}
export default Navbar