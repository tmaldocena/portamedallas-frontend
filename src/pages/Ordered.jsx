/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import UseCart from '../hooks/useCart'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Ordered = () => {

    const urlParam = new URLSearchParams(window.location.search)
    const id = urlParam.get('id');

    const { getCurrency } = UseCart();
    const [orden, setOrden] = useState({})
    const [comprador, setComprador] = useState({})
    const [direccion, setDireccion] = useState({})
    const [pedido, setPedido] = useState([]);

    useEffect(() => {
        fetchOrden();
    }, [])

    const fetchOrden = async () => {
        console.log(id);

        try {
            const res = fetch(`http://localhost:3000/api/orden/get/${id}`)
            //console.log(res);
            if (!res.ok) {
                console.log('There was an error!');
            }

            const json = await (await res).json();
            console.log(json)

            setOrden(json);
            setComprador(JSON.parse(json.orden_comprador))
            setDireccion(JSON.parse(json.orden_dir))
            setPedido(JSON.parse(json.orden_pedido))
        } catch (err) {
            console.log(err);
        }
    }

    const estado = (codigo) => {
        switch (codigo) {
            case 0:
                return 'El pedido no está pago';
            case 1:
                return 'El pago está pendiente a ser confirmado';
            case 2:
                return 'Pago confirmado, en espera a ser enviado';
            case 3:
                return 'Pedido en proceso de envío';
            case 4:
                return 'Pedido enviado';
            case 5:
                return 'Pedido entregado!';
            default:
                break;
        }
    }

    return (
        <section className='p-16 font-open text-primary'>
            <div className="lg:px-0 md:px-8 p-4 text-sm breadcrumbs">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/pedidos'>Mis Pedidos</Link></li>
                    <li>Ver pedido</li>
                </ul>
            </div>
            <span className='text-sm'>Pedido N° {orden.orden_numero}</span>
            <div role="alert" className="alert bg-base-300 text-primary">
                <box-icon name='info-circle' color='#0D0E26'></box-icon>
                <span>Muchas gracias por comprar en <strong>Portamedallas</strong>. A continuación te dejamos mas información acerca de tu pedido: </span>
            </div>
            <div className='flex flex-row mt-4 justify-between'>

                <div className='flex flex-col gap-4'>
                    <span className='flex flex-row align-middle gap-4'>
                        <box-icon name='check-circle'></box-icon>
                        <p>{estado(orden.orden_estado)}</p>
                    </span>
                    <ul className="steps steps-vertical">
                        <li className={"step " + (orden.orden_estado > 0 ? 'step-primary text-primary' : 'text-base-300')}>Pedido realizado</li>
                        <li className={"step " + (orden.orden_estado > 1 ? 'step-primary text-primary' : 'text-base-300')}>Pendiente de Pago</li>
                        <li className={"step " + (orden.orden_estado > 2 ? 'step-primary text-primary' : 'text-base-300')}>Pago confirmado</li>
                        <li className={"step " + (orden.orden_estado > 3 ? 'step-primary text-primary' : 'text-base-300')}>Pedido enviado</li>
                        <li className={"step " + (orden.orden_estado > 4 ? 'step-primary text-primary' : 'text-base-300')}>Pedido entregado</li>
                    </ul>
                </div>
                <div>

                </div>
                <div className='px-8 flex flex-col'>
                    <h5 className='text-xl text-primary'>Resumen de tu pedido</h5>
                    <div className='divider'></div>
                    <ul className="">
                        {pedido.map((prod, index) => {
                            return (
                                <li className='flex flex-row items-center justify-between py-2' key={index}>
                                    <span className='flex flex-row gap-4'>
                                        <div className="avatar">
                                            <div className="w-12 rounded">
                                                <img src={`./assets/products/${prod.product_slug}/${prod.product_slug}.jpg`} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className="text-lg text-primary font-semibold">{prod.product_name}</span>
                                            <span className='text-xs'>${prod.product_price}</span>
                                        </div>
                                    </span>
                                    <span className="px-8">x{prod.quantity}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <div className='divider'></div>
                    <span>Total: {getCurrency(orden.orden_precio - 12000)}</span>
                    <span>Envío: $ 12.000</span>
                    <span className='font-bold mt-2'>Total pagado: {getCurrency(orden.orden_precio)}</span>
                </div>
            </div>
            <div>
                <h5 className='font-bold text-primary underline py-4'>Más información del Pedido</h5>
                <div className='flex flex-row gap-12'>
                    <ul>
                        <span className='font-bold'>Datos del Comprador</span>
                        <li>Nombre y Apellido: {comprador.name}</li>
                        <li>Correo: {comprador.mail}</li>
                        <li>Teléfono: {comprador.phone}</li>
                    </ul>
                    <ul>
                        <span className='font-bold'>Dirección</span>
                        <li>Región: {direccion.region}</li>
                        <li>Ciudad: {direccion.ciudad}, {direccion.codigopostal}</li>
                        <li>Dirección: {direccion.direccion}</li>
                        <li>Datos Adicionales: {direccion.adicional}</li>
                    </ul>
                </div>
            </div>
            <div className='divider'></div>
            <p className='text-sm pt-8'>Para dudas o consultas, puedes escribirnos por el formulario o por nuestras redes sociales</p>
        </section>
    )
}

export default Ordered