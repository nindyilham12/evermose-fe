import React from "react";
import styles from '../styles/index.module.scss';
import Link from "next/link";
import { useProductsContext } from '../context/productsContext';

const ProductItem = () => {
    const { products } = useProductsContext();
    return (
        <div className={styles.containerShop}>
            <main className={styles.mainShop}>
                <div className={styles.gridShop}>

                    {products.map(item => (
                        <div className={styles.cardShop} key={item.id}>
                            <div className={styles.containerImg}>
                                <img src={item.thumbnail} className={styles.imgShop} />
                            </div>
                            <Link href={`/products/${item.slug}`} passHref>
                                <p className={styles.title}>{item.title}</p>
                            </Link>
                            <p className={styles.description}>{item.excerpt}</p>
                            <div className={styles.containerPrice}>
                                <div>
                                    <h3>{item.discountPrice} USD</h3>
                                    <p>{item.price}</p>
                                </div>
                                <Link href={`/products/${item.slug}`} passHref>
                                    <button
                                        className={styles.btnBuy}>
                                        Buy now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default ProductItem;