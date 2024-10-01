import React from 'react'
import './Header.css'



 function Header() {
  return (
   <div> 
       <section  style={{ display: 'flex' ,justifyContent:'space-between',padding:'5px 40px',color:'rgb(224, 220, 220)'}}>
       <p style={{ display: 'flex' , gap: '20px',fontSize:'13px'}}>
            <span className='location'>  <i className="fas fa-map-marker-alt"></i>   123 street,NewYork</span>

            <span className='gmail'>  <i className="fas fa-envelope"></i>  amarasaeed@gmail.com</span>
          </p>
            <ul className='Header-items' style={{ display: 'flex' , gap: '20px',listStyle:'none',fontSize:'13px'}}>
                <li >Follow Us:</li>
                <li>  <i className="fab fa-facebook"></i></li>
                <li>   <i className="fab fa-twitter"></i></li>
                <li>  <i className="fab fa-linkedin"></i></li>
                <li> <i className="fab fa-instagram"></i></li>
                
            </ul>
</section>

    
       
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray', width: '100%', margin: '0' }} />
        </div>
  )
}
export default Header
