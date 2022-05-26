import {Navbar, Hero, Product, Footer} from '../components'
import {client} from '../LIB/client'


export default function Home({products}) {
  return (
    <div className='index__div'>
      <Navbar />
       <Hero/>
       <div className='products-container'>
       {products?.map((product) => <Product key={product._id} product={product}/>)}
       </div>
    </div>
  )
}



export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)


  return {
    props: {products}
  }
}