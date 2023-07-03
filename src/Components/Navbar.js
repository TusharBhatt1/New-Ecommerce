import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../ContextApi/Context'


export default function Navbar() {



let cartItems=useContext(cartContext)
let total=cartItems.cartItems.length

  return (
    <div className=' text-sm s350:text-lg flex justify-around p-4 font-bold tracking-wider fixed bg-white w-full z-10  '>

     <Link to="/home"><p className='font-bold'>Home</p></Link>
     <p className='font-semibold'>Contact</p>
     <Link className='text-blue-700' to="/cart">{total!==0 ? `Cart (${total})` : "Cart" }</Link>
    </div>
  )
}
