import { Link } from "react-router-dom";
import UseCart from "../hooks/useCart"

//* HACER LA VISTA DEL CARRITO!

const CheckCart = () => {
    const { cart, getTotal, removeCart, getCurrency } = UseCart()



    return (
        <div className="w-full lg:px-16 px-8 py-32 align-middle place-content-evenly text-primary font-open">
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
                <h5 className="text-2xl font-bold my-6">Total a pagar: ${getCurrency(getTotal())}</h5>
                <Link to='/checkout' className={ cart.length == 0 ? "btn btn-disabled btn-outline" : "btn btn-primary"}>Continuar con el pago</Link>
            </div>
        </div>
    )
}

export default CheckCart

