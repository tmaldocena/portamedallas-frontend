const Login = () => {
    return (
        <div className="hero min-h-screen font-open">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-base-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139, 141, 183, 1),rgba(255,255,255,0))]"></div>
            <div className="hero-content flex-col lg:flex-row-reverse animate-fade-in animate-delay-300 animate-duration-slow gap-8">
                <div className="text-center lg:text-left">
                    <img src="./assets/logo-portamedallas-3.png" width={312}></img>
                    <h1 className="text-5xl text-primary font-bold">Iniciar sesión en Portamedallas</h1>
                    <p className="py-6">
                        Inicia sesión ahora mismo para poder realizar tus compras, ver el estado de tus pedidos y navegar por toda la tienda.
                    </p>
                </div>

                <div className="card bg-base-100 border-base-300 border w-full max-w-sm shrink-0 shadow-2xl">
                <a href="/" className="btn btn-link btn-primary no-underline"><box-icon name='arrow-back'></box-icon>Volver a Portamedallas</a>
                    
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span>Correo Electrónico</span>
                            </label>
                            <input type="email" placeholder="tucorreo@mail.com" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Contraseña</span>
                            </label>
                            <input type="password" placeholder="contraseña" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Olvidó su Contraseña?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Iniciar sesión</button>
                        </div>
                    </form>
                    <button className="btn btn-link btn-primary">Nuevo cliente? Registarse aquí</button>
                </div>
            </div>
        </div>
    )
}

export default Login