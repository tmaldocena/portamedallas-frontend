/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const UserContext = createContext()


export function UserProvider ({ children }) {
    const [user, setUser] = useState( JSON.parse(window.localStorage.getItem('user')) || {});


    const login = (data) => {
        console.log(data);
        //console.log(Object.keys(data).length);
        if(Object.keys(data).length > 1){
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data));
            return user;
        }else{
            return {};
        }
        //throw new Error('Usuario no existente')
    }

    const logout = () =>{
        fetch('https://portamedallas-backend.vercel.app/api/logout');
        setUser({});
        localStorage.removeItem('user');
        location.href = '/';
    }

    const register = async (data) => {
        console.log(data);
        try{
            fetch('https://portamedallas-backend.vercel.app/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
        } catch (error){
            throw new Error(error);
        }
    }

    
    return (
        <UserContext.Provider value={{
            user,
            login,
            register,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}

/* export function CartProvider ({ children }) {
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
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP', currencyDisplay: 'narrowSymbol' }).format(price);
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
 */
