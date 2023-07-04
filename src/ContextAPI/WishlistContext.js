import React, { createContext, useState } from 'react'


export const wishListContext=createContext()

export default function WishlistContext(props) {

    let [wishList,setWishList]=useState([])
  return (
    <wishListContext.Provider value={{wishList,setWishList}} >
     {props.children}
    </wishListContext.Provider>
  )
}
