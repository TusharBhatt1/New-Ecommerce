import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../ContextAPI/CartContext'
import like from "../Images/like.png"
import liked from "../Images/liked.png"
import { wishListContext } from '../ContextAPI/WishlistContext'

export default function Products() {

   let [data,setData]=useState([])
   let [categories,setCategories]=useState([])
   let[category,setCategory]=useState("")
   let [isLoading,setIsLoading]= useState(true)
   let [isDisabled,setIsDisabled]=useState(false)

   let[addedProduct,setAddedProduct]=useState([])

   let [likes,setLikes]=useState({})

 
    
   let url
  
   let Context =useContext(cartContext) 
   let WLContext =useContext(wishListContext)

   let {wishList,setWishList} =WLContext

  

    const fetchData=async()=>{
       
       setIsLoading(true) 
        category==="" ? url="https://dummyjson.com/products/"
           : url= `https://dummyjson.com/products/category/${category}`
        
            
     try {
        let res= await fetch(url)
        let finalRes= await res.json()
        setData(finalRes.products)
        console.log(data)
        setTimeout(()=>{setIsLoading(false)},2000) 
        console.log(data)
        }
     catch(error)
     {
        console.error("Error : " + error)
     }
    }

    useEffect(()=>{
    fetchData()
    },[category])

    useEffect(()=>{

        
        fetch("https://dummyjson.com/products/categories")
        .then(res=>res.json())
        .then(finalRes=>setCategories(finalRes.slice(0,5)))
        
        
    },[])

 
//Handling Like

const handleLike=(index,product)=>{
   let updatedLikes={...likes}
   updatedLikes[index]=!updatedLikes[index]
   setLikes(updatedLikes)

   //Add to wishlist
   // like[id] ? setWishList((prev)=>[...prev,product]) : setWishList(wishList.filter((item)=>item.id!==product.id))
}
   
// Handling Add To Cart
const handleAddToCart = (product) => {

let {cartItems,setCartItems} = Context
console.log("cartItems :" + cartItems)
   
//check for duplicate product
let duplicateItem= cartItems.find(item=>item.id===product.id)

cartItems && duplicateItem ? setCartItems((prev)=>[...prev]) :    setCartItems(prev=>[...prev,product])

   
    setAddedProduct(product)
    setTimeout(()=>{setAddedProduct([])},1000)


    //Throttling
    setIsDisabled(true)
    setTimeout(()=>{setIsDisabled(false)},1000)
        
    
  }

  


  return (

    /*Categories*/
    <div className='bg-gradient-to-r from-blue-100 via-white to-blue-300'>
    <div className='w-40 m-auto text-center text-sm font-serif font-bold mb-10 s350:mt-14'>
        <select className=' p-2 bg-black text-white hover:pointer' onChange={(e)=>setCategory(e.target.value)}>
            <option value={""}>All</option>
           {categories.map((c,index)=>(
            <option key={index} value={c}>{c.toUpperCase()}</option>
           ))}
        </select>
    </div>
    
     {/* isLoading */}
     { isLoading ?
     <div className='flex flex-wrap m-auto gap-20 justify-center items-center'>
     <div className=' animate-pulse bg-gradient-to-r from-gray-300 via-white to-gray-300 h-80 bg-gray text-center border-b-2 w-80 '>
     </div>                         
     <div className='  animate-pulse bg-gradient-to-r from-gray-300 via-white to-gray-300 h-80 bg-gray text-center border-b-2 w-80 '>
     </div>
     <div className=' animate-pulse bg-gradient-to-r from-gray-300 via-white to-gray-300 h-80 text-center border-b-2  w-80  '>
     </div>
     <div className=' animate-pulse bg-gradient-to-r from-gray-300 via-white to-gray-300 h-80 text-center border-b-2  w-80  '>
     </div>
     <div className=' animate-pulse bg-gradient-to-r from-gray-300 via-white to-gray-300 h-80 text-center border-b-2  w-80  '>
     </div>
     <div className=' animate-pulse bg-gradient-to-r from-gray-300 via-white to-gray-300 h-80 text-center border-b-2  w-80  '>
     </div>

     </div>

      
     :

     /* Products */
    <div className='flex flex-wrap m-auto gap-20 justify-center items-center'>
   
        {data.map((product)=>(
          
            <div key={product.id} className=' text-center border-b-2 bg-white rounded-md flex justify-center gap-5 flex-col p-4 border-black w-80 h-auto tracking-wider font-semibold '>
             <Link to={`/details/${product.id}`}>

                <img src={product.images[0]} className=' h-40 s350:h-52 w-60 flex m-auto ' alt={product.title}/>
                <p>{product.title}</p>
                <p className='font-serif mt-4'>Rs. {product.price *80}<span className='text-green-500'> ({product.discountPercentage} % off)</span></p>
            </Link>
              <span className='relative flex justify-center items-center'>
            {addedProduct && addedProduct.id===product.id && <p className='animate-bounce rounded  absolute bg-green-400 text-white w-20 m-auto p-1'>Added</p>}

                {/* Wishlist */}
                <img  onClick={()=>handleLike(product.id,product)} src={likes[product.id] ? liked  : like} className='h-5 cursor-pointer' alt="like"/>
                
                

   
                <button onClick={()=>handleAddToCart(product)} disabled={isDisabled} className=' text-sm border-2 border-blue-500 w-30 m-auto p-2 rounded-xl hover:bg-blue-500'>
                   Add To Cart
                </button>
                
                </span> 
                
            </div>
            
        ))}
     </div>
     }
    </div>
  )
}
