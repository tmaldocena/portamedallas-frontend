import { Link } from "react-router-dom";
import UseCart from "../hooks/useCart"
import { toast } from "sonner";
import { Toaster } from "sonner";
import { useState } from "react";

//* HACER LA VISTA DEL CARRITO!

const CheckCart = () => {
    const { cart, getTotal, removeCart, getCurrency } = UseCart()

    const [loading, setLoading] = useState(false)
    const [order, setOrder] = useState( localStorage.getItem('order_number') );

    const createOrder = async () => {
        console.log(order)
         try {
            setLoading(true);
            fetch('http://localhost:3000/api/orden/create', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: order })
                }).then((res) => res.text()).then(res => {
                    console.log(res);
                    localStorage.setItem('order_number', res);
                    location.href = `/checkout?order=${res}`;
                })
                //console.log(order);
        } catch {
            setLoading(false)
            toast.error('No pudimos crear tu orden');
        }
    }

    return (
        <div className="w-full lg:px-16 px-8 py-32 align-middle place-content-evenly text-primary font-open">
            <Toaster richColors position="top-center"/>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tienda'>Tienda</Link></li>
                    <li>Ver carrito</li>
                </ul>
            </div>
            <h2 className="text-2xl font-bold my-4">Ver carrito</h2>
            <div className="overflow-x-auto" >
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio ($)</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((prod, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="rounded-xl w-12 h-12">
                                                    <img src={`./assets/products/${prod.product_slug}/${prod.product_slug}.jpg`} alt="imagen de portamedalla" />
                                                </div>
                                            </div>
                                            <h5>{prod.product_name}</h5>
                                        </div>
                                    </td>
                                    <td>
                                        <span >{getCurrency(prod.product_price)}</span>

                                    </td>
                                    <td>
                                        {prod.quantity}
                                    </td>
                                    <th>
                                        <span className="">{getCurrency(prod.product_price * prod.quantity)}</span>
                                    </th>
                                    <th>
                                        <div className="tooltip tooltip-primary" data-tip="Remover producto">
                                            <button className="btn btn-circle btn-sm" onClick={ () => removeCart(prod) }><box-icon name='x'></box-icon></button>
                                        </div>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="divider" />
            <div className="w-full text-right">
                <h5 className="text-2xl font-bold my-6">Total a pagar: {getCurrency(getTotal())}</h5>
                <button className={ cart.length == 0 ? "btn btn-disabled btn-outline" : "btn btn-primary"} onClick={ () => createOrder()}>
                    { loading && ( <span className="loading loading-spinner"></span>)}
                    { !loading ? 'Continuar con el pago' : 'Creando orden'}
                </button>
            </div>
        </div>
    )
}

export default CheckCart

