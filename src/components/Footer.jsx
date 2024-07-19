import { Link } from "react-router-dom"

const Footer = () => {

    const whatsapp = 'https://api.whatsapp.com/send?phone=573206348134&text=%C2%A1Hola!%20Estoy%20en%20la%20tienda%20Portamedallas%20y%20quiero%20pedir%20m%C3%A1s%20informaci%C3%B3n.';
    const instagram = 'https://www.instagram.com/portamedallas/'

    return (
        <footer>
            <div className="footer p-10 bg-base-200 font-open">
                <aside>
                    <Link to='/'>
                        <img src="./assets/logo-portamedallas-3.png" alt="footer logo" height={192} width={192} />
                        <p className="text-primary font-semibold">Portando tus logros desde 2016</p>
                    </Link>
                </aside>
                <nav>
                    <h6 className="text-primary text-xl mb-2 font-semibold">Tienda</h6>
                    <a className="link link-hover">Productos</a>
                    <a className="link link-hover">Envíos y Devoluciones</a>
                    <Link to='/politica' className="link link-hover">Política de Tienda</Link>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="text-primary text-xl mb-2 font-semibold">Contacto</h6>
                    <a className="link link-hover">Formulario de contacto</a>
                    <a className="link link-hover">Institucional</a>
                    <br />
                    <span className="text-semibold">Bogotá, Colombia</span>
                    <span className="text-semibold">info@portamedallas.com</span>
                </nav>
                <nav>
                    <h6 className="text-primary text-xl mb-2 font-semibold">Síguenos</h6>
                    <div className="flex flew-row gap-4">
                        <a className="link link-hover" href={ instagram } target="_blank"><box-icon name="instagram" type="logo" size="lg"></box-icon></a>
                        <a className="link link-hover" href={ whatsapp } target="_blank"><box-icon name="whatsapp" type="logo" size="lg"></box-icon></a>
                    </div>
                </nav>
            </div>
            <div className="footer footer-center p-4 bg-primary text-base-100">
                <aside>
                    <div className="flex lg:flex-row flex-col align-middle gap-2 font-semibold text-xs">
                        <span className="text-sm items-center justify-center flex gap-2">De
                            <img src='./assets/colombia-flag.svg' alt="colombia flag" height={16} width={16}></img>
                            <span>para todo el</span>
                            <img src='./assets/planet.svg' alt="colombia flag" height={16} width={16}></img>
                        </span>
                        <span>&copy; 2024 Portamedallas. Todos los derechos reservados.</span>
                    </div>
                </aside>
            </div>
        </footer>
    )
}

export default Footer