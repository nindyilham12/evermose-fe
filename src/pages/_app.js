import '../styles/globals.scss';
import { ProductsContext } from '../context/productsContext';

function MyApp({ Component, pageProps }) {
  return (
    <ProductsContext>
      <Component {...pageProps} />
    </ProductsContext>
  ) 
}

export default MyApp
