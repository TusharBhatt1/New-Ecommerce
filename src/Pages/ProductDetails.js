import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { cartContext } from '../ContextApi/Context'

export default function ProductDetails() {

  let[details,setDetails]=useState()
  let Context= useContext(cartContext)
  let {id}= useParams()
  
  let [isDisabled,setIsDisabled]=useState(false)

   let[addedProduct,setAddedProduct]=useState([])

 
const handleAddToCart = (product) => {
   
  setAddedProduct(product)
  setTimeout(()=>{setAddedProduct([])},1000)

  Context.setCartItems(prev=>[...prev,product],
  
  setIsDisabled(true),
  setTimeout(()=>{setIsDisabled(false)},1500)
      )
  
}
  
  useEffect(()=>{
    
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res=>res.json()).then(data=>setDetails(data))
    console.log(details)
  },[])

  return (
    <div className='flex'>
    <>
    <Navbar/>
    </>
    <div className='flex mt-12 m-auto flex-col gap-2 p-4 justify-center items-center h-150 sm:h-screen'>
    <Link className='font-mono text-sm text-blue-400 underline p-2' to="/home">     Return</Link>
    
      {details ? <>

        <img src={details.images[0]} className='h-40 s350:h-52' alt={details.title}/>
        <p className='font-bold text-md s350:text-ld'>{details.title} - <span className='font-semibold'>{details.description}</span></p>
        <p className='font-semibold text-orange-400'>In Stock : {details.stock}</p>
        <p className='font-serif'>Rs. {details.price *80}<span className='text-green-500'> ({details.discountPercentage} % off)</span></p>
        <span className='text-center '>
        {addedProduct && addedProduct.id===details.id && <p className='animate-bounce rounded bg-green-400 text-white w-20 p-1'>Added</p>}
        </span>

        <button  onClick={()=>handleAddToCart(details)} disabled={isDisabled} className=' text-sm border-2 border-blue-500 w-40 m-auto p-2 rounded-xl hover:bg-blue-500'>Add to Cart</button>
        </>
        :<p className=' animate-pulse text-semibold font-serif'>Loading</p>
      }
    </div>
    </div>
  )
}
