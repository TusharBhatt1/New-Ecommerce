import React from 'react'
import Myself from "../Images/my.webp"
import { Link } from 'react-router-dom'

export default function Intro() {
  return (
    <div className='h-screen tracking-wider bg-gradient-to-r from-blue-100 via-white to-blue-300 flex justify-center items-center'>
   <div className='flex flex-col justify-center items-center gap-7 text-sm s350:text-lg' >
    <img src={Myself} className='h-20 w-20 rounded-full' alt='Tushar Bhatt'/>
    <p className='text-center font-semibold font-serif p-2'>Welcome to our <br/> React Ecommerce Store ! <br/>Discover a wide selection of Products and Shop with ease. <br/><br/> Happy Shopping!</p>
    <Link to="/home">
 
        <button className='bg-blue-500 p-2 font-bold text-white font-serif rounded animate-bounce '>C o n t i n u e</button>
    </Link>
   </div>
    </div>
  )
}
