import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart'

const Navbar = () => {

  const {showCart, setShowCart, totalQuantities} = useStateContext()

  return (
    <div className='nav__main'>
    <div className='nav__img__move'>
      <img className='nav__img' src={'/tech.png'} alt="" />
    </div>
    <div className='nav__icon'> 
   <AiOutlineShopping size={35} onClick={() => setShowCart(true)} />
   <span className='qty__nav'>{totalQuantities}</span>
    </div>
    {showCart && <Cart />}
    </div>
  )
}

export default Navbar