import { useEffect } from "react";
import UseLogin from "../hooks/useLogin"
import { useState } from "react";
import { Link } from "react-router-dom";

const Pedidos = () => {

    const { user } = UseLogin()
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        getPedidos();
    }, []);

    const getPedidos = async () => {

        try {
            const res = fetch(`https://portamedallas-backend.vercel.app/api/orden/user/${user.user.id}`)
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

    const badgeStatus = (codigo) =>{
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

    return (
        <section className="lg:p-16">
            <h2 className="text-2xl text-primary font-bold">Mis Pedidos</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>N° Pedido</th>
                            <th>Estado</th>
                            <th>Ver Detalles</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {pedidos.map((pedido, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <span className="text-lg font-bold text-accent">#{pedido.orden_numero}</span>
                                </td>
                                <td>
                                    { badgeStatus(pedido.orden_estado) }
                                </td>
                                <th>
                                    <Link to={`/order/success?id=${pedido.orden_id}`} className="btn btn-ghost btn-xs">Ver más</Link>
                                </th>
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

export default Pedidos