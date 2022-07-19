import React, { useContext, useState, useEffect, createContext, useReducer } from "react";
import axios from "axios";

const ProductContext = createContext();

const initialState = {
    cart: {cartItems: []},
}

function reducer (state, action) {
    switch(action.type){
        case 'CART_ADD_ITEM' : {
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(
                (item) => item.slug === newItem.slug
            );

            const cartItems = existItem
                ? state.cart.cartItems.map((item) =>
                        item.name === existItem.name ? newItem : item
                    )   
                : [...state.cart.cartItems, newItem];

            return {...state, cart: {...state.cart, cartItems}};
        }
        default:
        return state;
    }
}

export const ProductsContext = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
        const { data } = await axios.get(
            `https://my-json-server.typicode.com/nindyilham12/mockdata/products`
        );
        console.log(data);
            setProducts(data);
        }
        fetchData();
    }, []);
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch, products};
    
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductContext);