import '../styles/globals.css'
import '../styles/Navbar.scss'
import '../styles/Hero.scss'
import '../styles/product.scss'
import '../styles/footer.scss'
import '../styles/cart.scss'
import Layout from '../components/layout'
import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
    <Layout>
    <Toaster />
    <Component {...pageProps} />
    </Layout>
    </StateContext>
  )
}

export default MyApp
