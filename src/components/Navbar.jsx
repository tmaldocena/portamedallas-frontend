import 'boxicons';
import { Link } from 'react-router-dom';
import Autocomplete from './Autocomplete';
import UseCart from '../hooks/useCart';


const Navbar = () => {
    const { cart, clearCart, getTotal, getCurrency } = UseCart()

    console.log(cart);



    return (
        <>
            <header className='lg:flex md:flex flex-col hidden'>
                <div className='bg-accent px-16 flex gap-4 justify-center'>
                    <span><strong>Teléfono:</strong> 3107719636</span>
                    <span><strong>Whatsapp:</strong> 320 6348134</span>
                    <span><strong>Correo:</strong> samuelcastro@eltrolley.com</span>
                </div>
                <div className="navbar z-50 bg-primary lg:px-16 px-4 lg:flex md:hidden sm:hidden">
                    <div className="justify-start grow-0 mr-4">
                        <Link to='/' className="btn btn-link text-xl ">
                            <img src='./assets/logo-portamedallas-3.png' height={78} width={78}></img>
                        </Link>
                    </div>
                    <div className="grow">
                        <Autocomplete />
                    </div>
                    <div className="justify-end grow-0">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <box-icon type='solid' name='user' color='#fce7f3'></box-icon>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/profile'>Perfil</Link></li>
                                <li><Link to='/pedidos'>Mis pedidos</Link></li>
                                <li><a>Cerrar sesión</a></li>
                            </ul>
                        </div>
                        <div className="drawer drawer-end w-auto">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content indicator">
                                {/* Page content here */}
                                <span className="indicator-item badge badge-accent">{ cart.length }</span>  
                                <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle"><box-icon name='cart' color='#fce7f3'></box-icon></label>
                            </div>
                            <div className="drawer-side z-50">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu justify-end p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <ul>
                                        {cart.map((prod, index) => {
                                            return (
                                                <li className='flex flex-row items-center justify-between py-2' key={index}>
                                                    <span className='flex flex-row hover:bg-base-200 hover:text-primary'>
                                                        <div className="avatar">
                                                            <div className="w-8 rounded">
                                                                <img src={`./assets/products/${prod.product_slug}/${prod.product_slug}.jpg`} />
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <span>{prod.product_name}</span>
                                                            <span className='text-xs'>${prod.product_price}</span>
                                                        </div>
                                                    </span>
                                                    <span>x{prod.quantity}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <li className='font-bold text-xl text-center text-primary mb-2'>Total: {getCurrency(getTotal())}</li>

                                    <li className='btn btn-sm btn-accent mb-4' onClick={() => clearCart()}><a>Vaciar Carrito</a></li>

                                    <li className={cart.length === 0 ? 'btn btn-disabled btn-outline' : 'btn btn-primary'}><Link to='/cart'>Ver Carrito</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className='flex flex-row justify-evenly py-2 bg-primary'>
                    <Link to='/' className='btn btn-sm btn-primary'>Home</Link>
                    <Link to='/tienda' className='btn btn-sm btn-primary'>Tienda</Link>
                    <Link to='/muro' className='btn btn-sm btn-primary'>Muro</Link>
                    <Link to='/contact' className='btn btn-sm btn-primary'>Contacto</Link>
                </nav>
            </header>

            <header className="navbar fixed z-50 bg-primary lg:px-16 px-4 lg:hidden block">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <box-icon name='menu-alt-left' color='#fce7f3'></box-icon>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Homepage</Link></li>
                            <li><Link to='/tienda'>Tienda</Link></li>
                            <li><Link to='/contact'>Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="xl:hidden">
                        <a className="btn btn-link text-xl "><img src='./assets/logo-portamedallas-2.png' height={48} width={48}></img></a>
                    </div>
                </div>
                <div className="xl:navbar-center xl:inline-block hidden">
                    <Link to='/' className="btn btn-link text-xl "><img src='./assets/logo-portamedallas-2.png' height={56} width={56}></img></Link>
                </div>
                <div className="navbar-end lg:gap-2 gap-1">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <box-icon name='search' color='#fce7f3'></box-icon>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-auto">
                            <Autocomplete />
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <box-icon type='solid' name='user' color='#fce7f3'></box-icon>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Perfil</a></li>
                            <li><a>Mis pedidos</a></li>
                            <li><a>Cerrar sesión</a></li>
                        </ul>
                    </div>


                    <div className="drawer drawer-end w-auto">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle"><box-icon name='cart' color='#fce7f3'></box-icon></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu justify-end p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <ul>
                                    {cart.map((prod, index) => {
                                        return (
                                            <li className='flex flex-row items-center justify-between py-2' key={index}>
                                                <span className='flex flex-row hover:bg-base-200 hover:text-primary'>
                                                    <div className="avatar">
                                                        <div className="w-8 rounded">
                                                            <img src={prod.firstImage} />
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <span>{prod.tipo}</span>
                                                        <span className='text-xs'>${prod.valor}</span>
                                                    </div>
                                                </span>
                                                <span>x{prod.quantity}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <li className='font-bold text-xl text-center text-primary mb-2'>Total: ${getTotal()}</li>

                                <li className='btn btn-sm btn-accent mb-4' onClick={() => clearCart()}><a>Vaciar Carrito</a></li>

                                <li className={cart.length === 0 ? 'btn btn-disabled btn-outline' : 'btn btn-primary'}><Link to='/cart'>Ver Carrito</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </header>
        </>

    )
}

export default Navbar

