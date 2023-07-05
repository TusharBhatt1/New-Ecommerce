import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../ContextAPI/CartContext'


export default function Navbar() {



let cartItems=useContext(cartContext)
let total=cartItems.cartItems.length

  return (
    <div className=' text-sm s350:text-lg flex bg-gradient-to-r from-blue-100 via-white to-blue-300 justify-around p-4 font-bold tracking-wider fixed bg-white w-full z-10  '>

     <Link to="/home"><p className='font-bold'>Home</p></Link>
     {/* <Link to="/wishlist" className='font-bold text-pink-400'>Wishlist</Link> */}
     <p className='semibold'>Contact</p>
     <Link className='text-blue-700' to="/cart">{total!==0 ? `Cart (${total})` : "Cart" }</Link>
    </div>
  )
}
