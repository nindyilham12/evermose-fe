import React from "react";
import Head from 'next/head';
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from '../styles/index.module.scss';
import { BsInstagram, BsYoutube, BsTwitter, BsFacebook } from "react-icons/bs";
import { useProductsContext } from '../context/productsContext';

const Layout = ({ children, title }) => {

    const { state } = useProductsContext();
    const { cart } = state;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Lariat" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <header>
                    <nav className={styles.navbar}>
                        <Link href="/">
                            <img alt="brand-logo" src="/featured/logo.png"/>
                        </Link>
                        <div className={styles.containerMenu}>
                            <Link href="/cart">
                                <p className={styles.menu}>
                                    <AiOutlineShoppingCart />
                                    {cart.cartItems.length > 0 && (
                                        <span>
                                            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                        </span>
                                    )}
                                </p>
                            </Link>
                            <img alt="avatar-logo" src="/featured/default-avatar.png" className={styles.avatar}/>
                        </div>
                    </nav>
                </header>
                <main>
                    {children}
                </main>
                <footer className={styles.footer}>
                    Follow us on{' '}
                    <span className={styles.logo}>
                        <BsInstagram />&emsp;
                        <BsYoutube />&emsp;
                        <BsTwitter />&emsp;
                        <BsFacebook />
                    </span>
                </footer>
            </div>
        </>
    )
}

export default Layout;