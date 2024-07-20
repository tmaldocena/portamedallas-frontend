/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart.js";

const getCollar = (name) => {
    switch (name) {
        case 'Casa':
            return `./assets/products/portacollares/casa/casa.jpg`;
        case "Casa-perro-gato":
            return `./assets/products/portacollares/casa-perro-gato/casa-perro-gato.jpg`;
        case 'Cocker spaniel ':
            return `./assets/products/portacollares/cocker-spaniel/cocker-spaniel.jpg`;
        case 'Gato':
            return `./assets/products/portacollares/gato/gato.jpg`;
        case 'Gato sentado':
            return `./assets/products/portacollares/gato-sentado/gato-sentado.jpg`;
        case 'Golden':
            return `./assets/products/portacollares/golden/golden.jpg`;
        case 'I love my pet':
            return `./assets/products/portacollares/ilovemypet/ilovemypet.jpg`;
        case 'Labrador':
            return `./assets/products/portacollares/labrador/labrador.jpg`;
        case 'Lobo Siberiano':
            return `./assets/products/portacollares/siberiano/siberiano.jpg`;
        case 'Schnauzer':
            return `./assets/products/portacollares/schnauzer/schnauzer.jpg`;
        default:
            break;
    }
}

const Card = ({ item }) => {
    const { addToCart, cart, getCurrency } = useCart()

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
                <figure><img src={(item.product_category === 'Mascotas' ? getCollar(item.product_name) : `./assets/products/${item.product_slug}/${item.product_slug}.jpg`)} alt="Portamedallas" /></figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title text-base">
                    {item.product_name}
                </h2>
                <p>{getCurrency(item.product_price)}</p>
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