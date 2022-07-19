import styles from '../../styles/index.module.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useProductsContext } from '../../context/productsContext';

const DetailProduct = () => {
    const { products, state, dispatch } = useProductsContext();
    const {query} = useRouter();
    const {slug} = query;
    const productInfo = products.find(x => x.slug === slug);
    if(!productInfo){
        return <div>Product Not Found</div>
    }

    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    const addToCartHandler = () => {
        const existItem = state.cart.cartItems.find((x) => x.slug === productInfo.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        
        dispatch({ type: 'CART_ADD_ITEM', payload: {...productInfo, quantity }})
    }
    
    return (
        <Layout title={productInfo.tile}>
            <div>
                <main className={styles.containerDP}>
                    <div className={styles.slider}>
                        <img src={productInfo?.thumbnail} alt="product" className={styles.imgDP} />
                        <div className={styles.containerPV}>
                            <div className={styles.carouselDP}>
                                <Slider {...settings}>
                                    {productInfo.images.map(item => (
                                        <div className={styles.sliderImg} key={item}>
                                            <img src={item} className={styles.carouselDPImg} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mainContainer}>
                        <div className={styles.containerText}>
                            <h1>{productInfo.title}</h1>
                            <p>{productInfo.description}</p>
                            <div className={styles.containerPrice}>
                                <div className={styles.wrapperPrice}>
                                    <h3>{productInfo.discountPrice} USD</h3>
                                    <p>{productInfo.price}</p>
                                </div>
                                <button onClick={addToCartHandler} className={styles.containerBtnAdd}>
                                    <i>+</i>
                                    <span>Add to cart</span>
                                </button>
                            </div>
                            <div className={styles.containerDesc}>
                                <h2>Description</h2>
                                <p>{productInfo.description}</p>
                            </div>
                        </div>

                    </div>
                </main>

                
            </div>
        </Layout>
    )
}
export default DetailProduct;
