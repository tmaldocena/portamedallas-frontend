const Profile = () => {
    return (
        <section className="lg:p-16 p-8">
            <h2 className="font-bold text-3xl text-primary">Profile</h2>
            <div className="divider"></div>
            <div className="flex flex-row">
                <div className="flex flex-col justify-start">
                    <button className="btn btn-ghost my-2">Mis Datos</button>
                    <button className="btn btn-ghost my-2">Configuración de la cuenta</button>
                    <button className="btn btn-outline btn-secondary my-2">Cerrar sesión</button>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                    <h5>Direccion, etc</h5>
                </div>
            </div>
        </section>
    )
}

export default Profile