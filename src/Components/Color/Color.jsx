import React, { useState } from 'react'

export default function Backgroundclr() {
    const [color, setColor] = useState('white')
    return (
        <div className='w-6/6  h-screen ' style={{ backgroundColor: color }}>
            <div className='pt-40px'>
                <button onClick={() => {
                    setColor('red')
                }} className='bg-red-400 text-white w-6 h-6 rounded-xl  text-xs'></button>
                <button onClick={() => {
                    setColor('green')
                }} className='bg-green-500 text-white w-6 h-6 rounded-xl  text-xs'></button>
                 <button onClick={() => {
                setColor('blue')
                }} className='bg-blue-500 text-white w-6 h-6 rounded-xl  text-xs'></button>
                <button onClick={() => {
                setColor('gray')
                }} className='bg-gray-500 text-white w-6 h-6 rounded-xl  text-xs'></button>
                <button onClick={() => {
                setColor('pink')
                }} className='bg-pink-500 text-white w-6 h-6 rounded-xl  text-xs'></button>
                <button onClick={()=>{
                    setColor('orange')
                }}className='bg-orange-500 text-white w-6 h-6 rounded-xl  text-xs'></button>
                  <button onClick={()=>{
                    setColor('yellow')
                }}className='bg-yellow-500 text-white w-6 h-6 rounded-xl  text-xs'></button>
                  <button onClick={()=>{
                    setColor('purple')
                }}className='bg-purple-500 text-white w-6 h-6 rounded-xl  text-xs'></button>
                  <button onClick={()=>{
                    setColor('teal')
                }}className='bg-teal-500 text-white w-6 h-6 rounded-xl  text-xs'></button>
                  <button onClick={()=>{
                    setColor('cyan')
                }}className='bg-cyan-500 text-white w-6 h-6 rounded-xl  text-xs'></button>
      
           
    <input onChange={(e) => {
        setColor(e.target.value)
    }} type="color" />
            </div >

        </div >
    )
}