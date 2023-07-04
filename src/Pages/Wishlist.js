import React, { useContext } from 'react'
import { wishListContext } from '../ContextAPI/WishlistContext'
import Navbar from "../Components/Navbar"
export default function Wishlist() {

    let list=useContext(wishListContext)
    console.log(list)

  return (
    <div>
      <Navbar/>
    </div>
  )
}
