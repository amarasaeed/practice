// import React from 'react'
// import './Navbar.css'


//  function Navbar() {
//   return (
//     <div>
//         <nav className='navbar'>
//         <h1>
//             <span className='chari'>Chari</span>
//             <span className='team'>Team</span>
//           </h1>
//             <div className='nav-items'>
//                 <a>home</a>
//                 <a>page</a>
//                 <a>blog</a>
//                 <a>contact</a>
//                 <a>about</a>
//                 <a ><button>Donate Now <i className="fas fa-arrow-right"></i></button></a>
                

//             </div>
//         </nav>
//     </div>
//   )
// }
// export default Navbar
function nav(){
  return(
    <div>
      
        <h1 className="logo">
          <span id="chari">Chari</span>
          <span id="team">Team</span>
        </h1>
   <div  className="nav-list">
     <ul className="list-items">
      <li>Home</li>
      <li>About</li>
      <li>Causes</li>
      <li>Pages</li>
      <li>Contact</li>
    </ul></div>
    </div>
  )
}