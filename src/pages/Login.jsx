/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom"
import { Toaster, toast } from "sonner";
import UseLogin from "../hooks/useLogin";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {

    const { user, login } = UseLogin()
    const [loginUser, setLoginUser] = useState({})

    useEffect(() => {
        console.log(loginUser)
        if(Object.keys(loginUser).length > 0){
            
            try{
                const status = login(loginUser);
                console.log(status);
                if (status) {
                    toast.success(`Bienvenido a Portamedallas`);
                    setTimeout(() => {
                        location.href = '/'
                    }, 2000);
                }
            } catch (err) {
                toast.error('Usuario no encontrado');
            }
        }
        if(Object.keys(user).length > 0){
            location.href = '/profile';
        }

    }, [loginUser]);

    const fetchLogin = async (data) => {
        fetch('https://portamedallas-backend.vercel.app/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .then(res => setLoginUser(res));
            
    }


    const handleLogin = async (event) => {
        event.preventDefault();
        const dataEntries = event.target.elements;
        const data = {
            email: dataEntries.email.value,
            password: dataEntries.password.value,
        };
        try {
            // eslint-disable-next-line no-unused-vars
            const login = await fetchLogin(data);
        } catch (err) {
            toast.error(err);
            console.log(err);
            setLoginUser({})
        }
    };

    return (
        
        <div className="hero min-h-screen font-open">
            <Toaster position="top-center" richColors />
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-base-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139, 141, 183, 1),rgba(255,255,255,0))]"></div>
            <div className="hero-content flex-col lg:flex-row-reverse animate-fade-in animate-delay-300 animate-duration-slow gap-8">
                <div className="text-center lg:text-left">
                    <img src="./assets/logo-portamedallas-3.png" width={312} className="lg:w-[312px] w-full"></img>
                    <h1 className="lg:text-5xl text-2xl text-primary font-bold">Iniciar sesión en Portamedallas</h1>
                    <p className="lg:py-6 py-2 text-base sm:text-sm">
                        Inicia sesión ahora mismo para poder realizar tus compras, ver el estado de tus pedidos y navegar por toda la tienda.
                    </p>
                </div>

                <div className="card bg-base-100 border-base-300 border w-full max-w-sm shrink-0 shadow-2xl">
                    <a href="/" className="btn btn-link btn-primary no-underline"><box-icon name='arrow-back'></box-icon>Volver a Portamedallas</a>

                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span>Correo Electrónico</span>
                            </label>
                            <input type="email" placeholder="tucorreo@mail.com" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Contraseña</span>
                            </label>
                            <input type="password" placeholder="contraseña" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Olvidó su Contraseña?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Iniciar sesión</button>
                        </div>
                    </form>
                    <Link to='/register' className="btn btn-link btn-primary">Nuevo cliente? Registarse aquí</Link>
                </div>
            </div>
        </div>
    )
}

export default Login