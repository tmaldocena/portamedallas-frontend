/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// 1. crear contexto
export const CartContext = createContext();


// 2. crear proveedor
export function CartProvider ({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const addToCart = (product, quantity) => {
        const productInCart = cart.findIndex(item => item.id === product.id)

        console.log(product);

        if(productInCart > 0){
            const newCart = structuredClone(cart);
            newCart[productInCart].quantity += quantity;
            return setCart(newCart);
        }

        setCart( prevState => ([
            ...prevState,
            {
                ...product,
                quantity: quantity
            }
        ]))
    }

    const removeCart = product => {
        console.log(product)
        setCart( prevState => prevState.filter(item => item.product_id !== product.product_id))

        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const clearCart = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    }

    const getTotal = () => {
        let suma = 0;
        cart.forEach((prod) => {
            suma += prod.product_price * prod.quantity;
        })
        return suma;
    }

    const getCurrency = (price) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'COP', currencyDisplay: 'narrowSymbol' }).format(price);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeCart,
            getTotal,
            getCurrency
        }}>
            {children}
        </CartContext.Provider>
    )
}

