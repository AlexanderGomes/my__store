import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero__main'>
    <div className='hero__text'>
       
      <h2>We have the<span className='hero__span'> products</span></h2>


    
      <h2 className='hero__text__h2'><span className='hero__span'>You</span> didn't know</h2>


  
      <h2 className='hero__text__h22'>You  <span className='hero__span'>need</span></h2>

     
    </div>
    <div className='hero__img'>

    </div>
      <div className='move__img'>
        <img className='img__hero' src={'/hero.webp'} alt="" />
      </div>
     <h2 className='hero__best'>Best <span className='hero__span'> Sellers</span></h2>
    </div>
  )
}

export default Hero