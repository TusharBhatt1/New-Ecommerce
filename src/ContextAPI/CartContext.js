import React, { useState } from "react"


export const cartContext = React.createContext()

export default function CartContext(props)
{
    let [cartItems , setCartItems] =useState([])
    

    return (
        <cartContext.Provider value={{cartItems,setCartItems}} >
            {props.children}
        </cartContext.Provider>
    )
}

