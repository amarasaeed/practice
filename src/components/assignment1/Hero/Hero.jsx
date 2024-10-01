import React from 'react'
import './Hero.css'

 function Hero () {
  return (
    <div className='arrow'>
    <div> <i className="fas fa-angle-left arrow-btn1" ></i></div>
    <div className='headings'>
    <h1>Let's Change The World <br />With Humanity</h1><br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique sit dolores. </p><br />
    <button>Learn More <i className="fas fa-arrow-right "></i> </button> </div>
    <div><i className="fas fa-angle-right arrow-btn2 "></i></div>
   </div>
  )
}
export default Hero
