import React from 'react'
import Link from 'next/link'
import {urlFor} from '../LIB/client'

const Products = ({product: {image, name, slug, price}}) => {
  return (

     <div>
      <Link href={`/product/${slug.current}`}>
       <div className='product__card'>
       <div className='products__img__div'>
       <img src={urlFor(image && image[0])} alt="" 
       width={250}
       height={250}
       className='product__img'
       />
       </div>
       <p className='product__name'>{name}</p>
       <p className='product__price'>${price}</p>
       </div>
      </Link>
     </div>

  )
}

export default Products