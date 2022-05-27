import React from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {client, urlFor} from '../../LIB/client'
import {Product} from '../../components'
import { useStateContext } from '../../context/StateContext';

const productDetails = ({product, products}) => {
  const {onAdd, qty, decQty, incQty, setShowCart} = useStateContext()
  const { image, name, details, price } = product;

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div className='app__slug__main'>
      <div className='slug__img'>
       <img className='slug__img__img' src={urlFor(image && image[0])} alt="" />
      </div>
      <div className='slug__details__main'>
       <h3 className='slug__name'>{name}</h3>
       <div className='slug__stars star'>
        <AiFillStar className='a' />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        (250)
       </div>
       <div className='app_desc'>
       <p className='slug__d'>Details:</p>
       <p className='slug__desc'>{details} 
        </p>
       </div>
     
       <p className='slug__price'>${price}</p>
        <p className='quantity__text'>Quantity :</p>
       <p className='quantity__desc'>
        <span className='plus' onClick={incQty}><AiOutlinePlus/></span>
        <span className='num'>{qty}</span>
        <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
       </p>
       <div className='buttons'>
    <button className='buy__now' onClick={handleBuyNow} >Buy Now</button>
    <button className='add__cart' onClick={() => onAdd(product, qty)}>Add to Cart</button>
       </div>
      </div>
    </div>
  )
}

export default productDetails


export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}


export const getStaticProps = async ({params: {slug}}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
   props: {products, product}
  }
}