import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <Layout title="Product">
      <div>
        <main className={styles.containerBanner}>
          <div>
            <h1>Products</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus ultrices quam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus.
            </p>
          </div>
        </main>
        <ProductItem />
      </div>
    </Layout>
  )
}
