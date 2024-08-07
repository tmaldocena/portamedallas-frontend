import { useRef } from "react"
import UseCart from "../hooks/useCart"
import { useState } from "react"
import { useEffect } from "react"
import MercadoPago from "../components/shop/MercadoPago";
import UseLogin from "../hooks/useLogin";



const Checkout = () => {

    const whatsapp = 'https://api.whatsapp.com/send?phone=573206348134&text=%C2%A1Hola!%20Realicé%20una%20compra%20en%20la%20tienda%20Portamedallas%20y%20quiero%20notificar%20el%20pago%20';


    const urlParam = new URLSearchParams(window.location.search)

    const { cart, getTotal, getCurrency } = UseCart();
    const { user } = UseLogin()
    const [showAlert, setShowAlert] = useState(false);
    const [step, setStep] = useState(1);
    const [regions, setRegions] = useState([]);
    const [form, setForm] = useState({ id: urlParam.get('order'), pedido: JSON.stringify(cart), precio: getTotal() + 12000, user_id: user.user.id })
    const [discountAlert, setDiscountAlert] = useState({ type: 'alert-success', text: '' });

    const discount = useRef();

    useEffect(() => {

        fetch("https://api-colombia.com/api/v1/Department")
            .then(response => response.json())
            .then(result => setRegions(result))
            .catch(error => console.log('error', error));

    }, []);

    const handleDiscount = () => {
        if (discount.current.value.toUpperCase() === 'CODIGOPRUEBA') {
            // Aplicar el descuento
            setDiscountAlert({ type: 'alert-success', text: 'Código aplicado correctamente' })
        } else {
            setDiscountAlert({ type: 'alert-error', text: 'No existe el código' })
        }

        setTimeout(() => {
            setShowAlert(false)
        }, 2000);
        setShowAlert(true);
    }

    const handleStep1 = (event) => {
        event.preventDefault();
        const dataEntries = event.target.elements;

        const firstData = {
            user_id: user.user.id,
            name: dataEntries.name.value,
            mail: dataEntries.mail.value,
            phone: dataEntries.phone.value
        }

        console.log(JSON.stringify(firstData));
        setForm({ ...form, first: JSON.stringify(firstData) });

        setStep(step + 1)
    }

    const handleStep2 = (event) => {
        event.preventDefault()
        const dataEntries = event.target.elements;
        //console.log(dataEntries);
        const secondData = {
            region: dataEntries.region.value,
            ciudad: dataEntries.ciudad.value,
            direccion: dataEntries.direccion.value,
            adicional: dataEntries.adicional.value,
            codigopostal: dataEntries.codigopostal.value
        }
        //console.log(secondData)
        setForm({ ...form, second: JSON.stringify(secondData) })

    }

    //TODO: HACER LLAMADA A LA API PARA GUARDAR LA ORDEN!!!
    console.log(form);

    const saveOrder = async () => {
        fetch('https://portamedallas-backend.vercel.app/api/orden/update',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }).then(res => res.json()).then(res => {
                const id = res.rows[0][0];
                location.href = `/order/success?id=${id}`;
            })
    }


    return (
        <section className="px-16 py-24 font-open">
            <dialog id="qr_nequi" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Pasos para pagar con Nequi</h3>
                    <div className="flex flex-row gap-12">
                        <img src="/assets/qr-nequi.png" width={256} />
                        <div>
                            <p>A continuación tienes nuestro QR de Nequi para hacer el pago.</p>
                            <p className="py-4">Debes hacer una transferencia de <strong>{getCurrency(getTotal() + 12000)}</strong></p>
                            <ul className="list-decimal">
                                <li>Entra en Nequi y presiona el botón QR. Lo encuentras debajo del número de cel.</li>
                                <li>Escanea el código QR de Nequi con la cámara de tu cel.</li>
                                <li>Confirma que esté bien el valor que vas a pagar.</li>
                                <li>Escribe tu clave y listo.</li>
                            </ul>
                            <p className="py-4">No olvides notificarnos que hiciste el pago</p>
                            <a className="link link-hover" href={ whatsapp } target="_blank"><box-icon name="whatsapp" type="logo" size="lg"></box-icon></a>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Cerrar</button>
                        </form>
                        <button className="btn btn-primary" onClick={() => saveOrder()}>Ya realicé el pago</button>
                    </div>
                </div>
            </dialog>
            <div className="flex flex-row justify-center">
                <div className="w-1/2">
                    <span className="flex flex-row">
                        <img src="./assets/logo-portamedallas-1.png" alt="logo portamedallas" width={32} />
                        <h1 className="text-lg font-bold text-primary">Resumen del pedido</h1>
                    </span>
                    <h3 className="my-4 text-xl font-light">Precio de productos: {getCurrency(getTotal())}</h3>
                    {
                        step >= 2 && (
                            <h5 className="my-2 text-lg font-light">Costo de envío: {getCurrency(12000)}</h5>
                        )
                    }
                    <div className="divider" />
                    <ul className="">
                        {cart.map((prod, index) => {
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
                                    <span className="pr-8">x{prod.quantity}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium flex flex-row gap-2 items-center">
                            <box-icon type='solid' name='discount'></box-icon> Ingresar código de descuento
                        </div>
                        <div className="collapse-content">
                            <div className="join">
                                <input type="text" ref={discount} placeholder="Tú código de descuento" className="input input-sm input-bordered input-primary w-full max-w-xs join-item" />

                                <button className="btn btn-sm btn-outline btn-primary join-item" onClick={() => handleDiscount()}>Aplicar</button>
                            </div>
                            {
                                showAlert && (
                                    <div className="toast z-10">
                                        <div className={'alert ' + discountAlert.type}>
                                            <span>{discountAlert.text}</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <ul className="steps steps-vertical lg:steps-horizontal w-full">
                        <li className={'step transition-colors ' + (step >= 1 ? 'step-primary font-bold' : '')}>Datos Personales</li>
                        <li className={'step transition-colors ' + (step >= 2 ? 'step-primary font-bold' : '')}>Datos de Envío</li>
                        <li className={'step transition-colors ' + (step >= 3 ? 'step-primary font-bold' : '')}>Métodos de Pago</li>
                    </ul>
                    <div className="w-full">
                        <form className={"grid w-full rounded bg-base-200 text-primary-content p-4 " + (step == 1 ? 'grid' : 'hidden')} onSubmit={handleStep1}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Correo eléctronico</span>
                                </div>
                                <input type="mail" name="mail" placeholder="tucorreo@mail.com" className="input input-bordered w-full text-primary" required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Nombre y Apellido</span>
                                </div>
                                <input type="text" name="name" placeholder="Juan Perez" className="input input-bordered w-full text-primary" required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Número de Teléfono</span>
                                </div>
                                <input type="tel" name="phone" placeholder="(+11) 111-111-1111" className="input input-bordered w-full text-primary" required />
                            </label>
                            <div className="mt-4 w-full flex flex-row justify-between">
                                <button className="btn btn-outline btn-primary btn-disabled" onClick={() => setStep(step - 1)}>Volver</button>
                                <input type="submit" value='Siguiente' className="btn btn-wide btn-outline btn-primary" ></input>
                            </div>
                        </form>
                        <form className={"grid w-full rounded bg-base-200 text-primary-content p-4 " + (step == 2 ? 'grid' : 'hidden')} onSubmit={handleStep2}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Región</span>
                                </div>
                                <select className="select select-bordered text-primary select-primary" name="region">
                                    <option disabled selected>Seleccionar Departmento</option>
                                    {regions.map(region => {
                                        return (
                                            <option key={region.id} value={region.name} >{region.name}</option>
                                        )
                                    })}
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Ciudad</span>
                                </div>
                                <input type="text" placeholder="Bogotá, Medellín, etc." name="ciudad" className="input input-bordered w-full text-primary" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Dirección</span>
                                </div>
                                <input type="text" placeholder="Calles, número, etc." name="direccion" className="input input-bordered w-full text-primary" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Detalles adicionales</span>
                                </div>
                                <input type="text" placeholder="Número de apartamento, indicaciones adicionales, etc." name="adicional" className="input input-bordered w-full text-primary" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Código Postal</span>
                                </div>
                                <input type="number" placeholder="0000" name="codigopostal" className="input input-bordered w-full max-w-xs text-primary" />
                            </label>
                            <div className="mt-4 w-full flex flex-row justify-between">
                                <button className="btn btn-outline btn-primary" onClick={() => setStep(step - 1)}>Volver</button>
                                <input type="submit" value='Siguiente' className="btn btn-wide btn-outline btn-primary" onClick={() => setStep(step + 1)}></input>
                            </div>
                        </form>
                        <div className={"grid w-full rounded bg-base-200 text-primary-content p-4 " + (step == 3 ? 'grid' : 'hidden')}>
                            <div className="mt-4 w-full flex flex-col justify-between">
                                <span className="text-primary mb-4">A continuación tienes nuestros métodos de pago disponibles:</span>
                                <button className='btn btn-primary' onClick={() => document.getElementById('qr_nequi').showModal()}>Pagar con QR Nequi</button>
                                <div className="divider text-primary">o</div>
                                <MercadoPago form={form}/>

                                <div className="mt-4 w-full flex flex-row justify-between">
                                    <button className="btn btn-outline btn-primary" onClick={() => setStep(step - 1)}>Volver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout