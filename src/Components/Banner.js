import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import one from "../Images/picone.jpg"
import two from "../Images/2.jpg"
import three from "../Images/3.jpg"
import four from "../Images/4.jpg"


import 'react-alice-carousel/lib/alice-carousel.css';

export default function Banner() {

let images=[one,two,three,four]

  return (
    <div className='h-96'>
    
     <AliceCarousel disableDotsControls={true} animationType='fadeout'  animationDuration={1000} disableButtonsControls={true} autoPlay={true} infinite items={images.map(img=><img src={img} className='mt-28 s350:mt-20 h-52  m-auto s350:h-80 ' alt='carousel'/>)}/>
    </div>
  )
}
