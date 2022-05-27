import React from 'react'
import Link from 'next/link'

const canceled = () => {
  return (
    <div className='canc__main'>
      <h2 className='app__text'>Order Canceled</h2>
      <Link href={'/'}>
       <button className='btn move'>Continue Shopping</button> 
      </Link>
    </div>
  )
}

export default canceled