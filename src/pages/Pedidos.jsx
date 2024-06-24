const Pedidos = () => {
    return (
        <section className="lg:p-16">
            <h2 className="text-2xl text-primary font-bold">Mis Pedidos</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>N° Pedido</th>
                            <th>Estado</th>
                            <th>Ver Detalles</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <span className="text-lg font-bold text-accent">#0001</span>
                            </td>
                            <td>
                                <span className="badge badge-primary">Entregado</span>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Ver más</button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <span className="text-lg font-bold text-accent">#0100</span>
                            </td>
                            <td>
                                <span className="badge badge-secondary">En proceso</span>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Ver más</button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <span className="text-lg font-bold text-accent">#0133</span>
                            </td>
                            <td>
                                <span className="badge badge-info">Pendiente de pago</span>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Ver más</button>
                            </th>
                        </tr>
                        
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