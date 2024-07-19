import { Link } from "react-router-dom"
import { Toaster } from "sonner";
import { toast } from "sonner";
import UseLogin from "../hooks/useLogin";
import { useEffect } from "react";

const Register = () => {

    const { register, user } = UseLogin()

    useEffect(() => {

        if(Object.keys(user).length > 0){
            location.href = '/profile';
        }
    }, []);

    const handleRegister = async (event) => {
        event.preventDefault();
        const dataEntries = event.target.elements;
        //console.log(dataEntries);
        if (dataEntries.password.value === dataEntries.password_repeat.value) {
            const data = {
                name: dataEntries.name.value,
                email: dataEntries.email.value,
                password: dataEntries.password.value,
            };
            try {
                register(data);
                document.getElementById('modalRegister').showModal()
            } catch (err) {
                toast.error(err);
            }
        } else {
            toast.error('Las contraseñas no coinciden')
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200 font-open">
            <Toaster position="top-center" richColors />
            <div className="hero-content flex-col lg:flex-row animate-fade-in animate-delay-300 animate-duration-slow gap-8">
                <div className="text-center lg:text-left">
                    <img src="./assets/logo-portamedallas-3.png" width={312} className="lg:w-[312px] w-full"></img>
                    <h1 className="lg:text-5xl text-2xl text-primary font-bold">Registrarse en Portamedallas</h1>
                    <p className="lg:py-6 py-2">
                        Regístrate ahora mismo en Portamedallas, para poder realizar tus compras y poder seguir tus pedidos.
                    </p>
                </div>

                <div className="card bg-base-100 border-base-300 border w-full max-w-sm shrink-0 shadow-2xl">
                    <a href="/" className="btn btn-link btn-primary no-underline"><box-icon name='arrow-back'></box-icon>Volver a Portamedallas</a>

                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span>Nombre y Apellido</span>
                            </label>
                            <input type="text" name="name" placeholder="Juan Perez" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Correo Electrónico</span>
                            </label>
                            <input type="email" name="email" placeholder="tucorreo@mail.com" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Contraseña</span>
                            </label>
                            <input type="password" name='password' placeholder="contraseña" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Repetir contraseña</span>
                            </label>
                            <input type="password" name="password_repeat" placeholder="contraseña" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Iniciar sesión</button>
                        </div>
                    </form>
                    <Link to='/login' className="btn btn-link btn-primary">Ya tienes cuenta? Ingresar aquí</Link>
                </div>
            </div>
            <dialog id="modalRegister" className="modal">
                <div className="modal-box border border-accent">
                    <div className="flex flex-row">
                        <box-icon name='check' color="#0D0E26"></box-icon>
                        <h3 className="font-bold text-lg text-primary">Registro Exitoso!</h3>
                    </div>
                    <p className="py-4">Gracias por registrarse en Portamedallas, ahora puedes iniciar sesión</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/login'><button className="btn btn-primary">Iniciar sesión</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    )
}

export default Register