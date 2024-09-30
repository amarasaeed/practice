import React from 'react'
import './Header.css'



 function Header() {
  return (
   <div> <section>
       
       <div style={{ display: 'flex' , gap: '20px'}}>
            <h6 className='location'>  <i className="fas fa-map-marker-alt"></i>   123 street,NewYork</h6>

            <h6 className='gmail'>  <i className="fas fa-envelope"></i>  amarasaeed@gmail.com</h6>
          </div>
            <div className='Header-items'>
                <a>Follow Us</a>
                <a>  <i className="fab fa-facebook"></i></a>
                <a>   <i className="fab fa-twitter"></i></a>
                <a>  <i className="fab fa-linkedin"></i></a>
                <a> <i className="fab fa-instagram"></i></a>
                
            </div>


        </section>
       
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray', width: '100%', margin: '0' }} />
        </div>
  )
}
export default Header
