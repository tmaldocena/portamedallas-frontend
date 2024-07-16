import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "sonner";
import { toast } from "sonner";

const Admin = () => {

    const [pedidos, setPedidos] = useState([])
    const [selectedOrden, setSelectedOrden] = useState({})

    useEffect(() => {
        getPedidos();
    }, []);

    const getPedidos = async () => {

        try {
            const res = fetch(`http://localhost:3000/api/orden/get`)
            //console.log(res);
            if (!res.ok) {
                console.log('There was an error!');
            }

            const json = await (await res).json();
            console.log(json)
            setPedidos(json);
        } catch (error) {
            throw new Error('No pudimos buscar los pedidos.');
        }
    }

    const userMail = (user) => {
        const parsed = JSON.parse(user);
        return (
            <span className="font-bold text-secondary">{parsed.mail || 'no existe'}</span>
        )
    }

    const handleModal = (pedido) => {
        setSelectedOrden(pedido);
        document.getElementById('modalPedido').showModal();
    }

    const badgeStatus = (codigo) => {
        switch (codigo) {
            case 0:
                return (<span className="badge badge-error">No pagado</span>)
            case 1:
                return (<span className="badge badge-warning">Pago pendiente</span>)
            case 2:
                return (<span className="badge badge-success">Pago confirmado</span>)
            case 3:
                return (<span className="badge badge-info">En proceso de envío</span>)
            case 4:
                return (<span className="badge badge-accent">Pedido enviado</span>)
            case 5:
                return (<span className="badge badge-primary">Pedido entregado!</span>)
            default:
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newState = event.target.elements;

        const form = {
            id: selectedOrden.orden_id,
            state: newState.state.value
        }

        try {

            fetch(`http://localhost:3000/api/orden/update-state/${selectedOrden.orden_id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                }
            )
            setInterval(() => {
                document.getElementById('modalPedido').close();
                location.reload();
            }, 2000);
            toast.success('Orden actualizada')
        } catch (error) {
            toast.error('No pudimos actualizar la orden')
        }

    }

    return (
        <section className="lg:p-16">
            <Toaster richColors position="top-center" />
            <dialog id="modalPedido" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Orden #{selectedOrden.orden_numero}</h3>
                    <span className="py-4 flex flex-row justify-between align-middle">
                        <p>El estado actual es:</p>
                        {badgeStatus(selectedOrden.orden_estado)}
                    </span>
                    <div className="label">
                        <span className="label-text">Seleccionar nuevo estado</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <select className="select select-bordered w-full" name="state">
                            <option disabled selected>Estado actual</option>
                            <option value={0}>No pagado</option>
                            <option value={1}>Pendiente de pago</option>
                            <option value={2}>Pagado</option>
                            <option value={3}>En proceso de envío</option>
                            <option value={4}>Enviado</option>
                            <option value={5}>Entregado</option>
                        </select>
                        <input type="submit" value="Actualizar estado" className="btn btn-outline btn-primary w-full mt-8" />
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <h2 className="text-2xl text-primary font-bold">Mis Pedidos</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>N° Pedido</th>
                            <th>Comprador</th>
                            <th>Estado</th>
                            <th>Ver Detalles</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {pedidos.map((pedido, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <span className="text-lg font-bold text-accent">#{pedido.orden_numero}</span>
                                </td>
                                <td>
                                    {pedido.orden_comprador && userMail(pedido.orden_comprador) || 'No hay'}
                                </td>
                                <td>
                                    {badgeStatus(pedido.orden_estado)}
                                </td>
                                <th>
                                    <Link to={`/order/success?id=${pedido.orden_id}`} className="btn btn-ghost btn-xs">Ver más</Link>
                                </th>
                                <td>
                                    <button className="btn btn-outline" onClick={() => handleModal(pedido)}>Cambiar estado</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>N° Pedido</th>
                            <th>Estado</th>
                            <th>Ver Detalles</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </section>
    )
}

export default Admin