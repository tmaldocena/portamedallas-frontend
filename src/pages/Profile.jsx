import { useState } from "react";
import UseLogin from "../hooks/useLogin"

const Profile = () => {

    const { user } = UseLogin();
    const [disabled, setDisabled] = useState(true);

    console.log(user)

    return (

        <section className="lg:p-16 p-8">
            <div className="flex flex-row justify-between">
                <h2 className="font-bold text-3xl text-primary">Mi Perfil</h2>
                <button className="btn btn-outline btn-secondary my-2">Cerrar sesión</button>
            </div>
            <div className="divider"></div>
                <div className="flex flex-col gap-8 animate-fade-in">
                    <h3 className="text-xl font-bold text-primary">Mis datos</h3>
                    <form className="flex gap-8 flex-col">
                        <div className="flex flex-row justify-between">
                            <label className="input input-bordered flex items-center gap-4 w-1/4">
                                <box-icon type='solid' name='user' color="#0D0E26"></box-icon>
                                <input type="text" name="name" className="grow text-base-300 focus:text-primary" value={user.user.name} disabled={disabled}></input>
                            </label>
                            <label className="input input-bordered flex items-center gap-4 w-1/4">
                                <box-icon type='solid' name='envelope' color="#0D0E26"></box-icon>
                                <input type="text" name="mail" className="grow text-base-300 focus:text-primary" value={user.user.email} disabled={disabled}></input>
                            </label>
                            <label className="input input-bordered flex items-center gap-4 w-1/4">
                                <box-icon type='solid' name='phone' color="#0D0E26"></box-icon>
                                <input type="text" name="phone" className="grow text-base-300 focus:text-primary" placeholder={user.user.phone || 'No hay ningún teléfono'} value={user.user.phone} disabled={disabled}></input>
                            </label>
                        </div>
                        <label className="input input-bordered flex items-center flex-grow gap-4">
                            <box-icon type='solid' name='home' color="#0D0E26"></box-icon>
                            <input type="text" name="phone" className="grow text-base-300 focus:text-primary" placeholder={user.user.dir || 'No hay dirección'} value={user.user.dir} disabled={disabled}></input>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <box-icon type='solid' name='key' color="#0D0E26"></box-icon>
                            <input type="password" className="grow" value="password" />
                        </label>
                    </form>
                    <div className="flex flex-row justify-between gap-4">
                        <button className="btn btn-primary" disabled={disabled}>Guardar datos</button>
                        <input type="checkbox" aria-label="Editar datos" className="btn btn-outline btn-accent" onChange={() => setDisabled(!disabled)} />
                    </div>
                </div>
                <div className="divider"></div>
                <button className="btn btn-link btn-secondary">Eliminar cuenta</button>
        </section>
    )
}

export default Profile