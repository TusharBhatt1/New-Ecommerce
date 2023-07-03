import { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { cartContext } from '../ContextAPI/Context'
import { Link } from 'react-router-dom'
export default function Cart() {

 let cart = useContext(cartContext)
 console.log(cart)

 let [quantity,setQuantity] =useState(1)
 let cartItems =cart.cartItems

 let [totalPrice,setTotalPrice] =useState(0)


 
 console.log(cartItems)


 const handleRemove=(id)=>{

  
  let updatedCart= cartItems.filter(item=>item.id!==id)
  cart.setCartItems(updatedCart)

 }
 
 useEffect(()=>{
  
 setTotalPrice(cartItems.reduce((prev,item)=>{return prev+item.price*80*quantity},0))

 },[quantity,cartItems])


  return (
    <>
    <div className='flex'>
    
    <Navbar />
    <div>
      
    </div>
   
    <div className='bg-blue-100 mt-20 w-screen'>
    { 
      cartItems.length===0 ?
      <div> <p className='bg-white text-center font-bold font-serif '> CART IS EMPTY <span>
      <span>  </span>
      <Link className='font-mono text-sm text-blue-400 underline p-2' to="/home">     Return</Link>
      </span></p>
     </div>
      :
      <div>
      <Link to="/home">
      <p className='text-center bg-white w-20 m-auto font-mono text-sm text-blue-400 underline p-2 '>Return</p>
      </Link>

     { cartItems.map(item=>(
        
        <div className='mb-10 text-sm sm:text-lg flex justify-around items-center font-semibold'>
        
        <img src={item.images[0]} className='w-12 s350:w-20 h-15 rounded-lg' alt={item.title}/>
       
        <p>Rs {item.price*80*quantity}</p>
        <select onChange={(e)=>setQuantity(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        <button onClick={()=>handleRemove(item.id)} className='border-2 border-black rounded-full w-8 h-8 '>-</button>
        </div>
        
        ))
     }
        </div>    
    }
    
   
    </div>
   
    
    </div>
    <p className='text-center p-7 font-semibold s350:text-xl font-serif'>{cartItems.length!==0 && `Total : Rs. ${totalPrice}`}</p>
    </>
  )
}
