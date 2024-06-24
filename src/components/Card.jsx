/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart.js";

const Card = ({ item }) => {
    const { addToCart, cart } = useCart()

    const [amount, setAmount] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const incrementCounter = () => setAmount(amount + 1);
    let decrementCounter = () => setAmount(amount - 1);
    if (amount < 2) {
        decrementCounter = () => setAmount(1);
    }

    const addItem = (item, amount) => {
        addToCart(item, amount)
        setTimeout(() => {
            setShowAlert(false)
        }, 2000);
        setShowAlert(true);

        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <div className="card lg:w-72 w-80 bg-base-100 shadow-xl">
            {
                showAlert && (
                    <div className="toast z-10">
                        <div className="alert alert-success">
                            <span>Item agregado al carrito!</span>
                        </div>
                    </div>
                )
            }
            <Link to={'/item/' + item.product_id}>
                <figure><img src={`./assets/products/${item.product_slug}/${item.product_slug}.jpg`} alt="Portamedallas" /></figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title text-base">
                    {item.product_name}
                </h2>
                <p>${item.product_price}</p>
                <div className="card-actions justify-between items-center">
                    <div>
                        <button className="btn btn-sm btn-square" onClick={decrementCounter}>-</button>
                        <span className="px-2 bg-base-100">{amount}</span>
                        <button className="btn btn-sm btn-square" onClick={incrementCounter}>+</button>
                    </div>
                    <button className="btn btn-outline btn-sm btn-primary" onClick={() => addItem(item, amount)}>
                        <box-icon name="cart" color="#555" />
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card