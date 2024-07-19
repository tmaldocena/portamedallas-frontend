import 'boxicons';
import { Link } from 'react-router-dom';
import Autocomplete from './Autocomplete';
import UseCart from '../hooks/useCart';
import { useState } from 'react';
import UseLogin from '../hooks/useLogin';
import { useEffect } from 'react';
import Marquee from "react-fast-marquee";


const Navbar = () => {
    const { cart, clearCart, getTotal, getCurrency } = UseCart()
    const { user, logout } = UseLogin()
    const [login, setLogin] = useState(false);

    /* console.log(cart);
    console.log(user)
    console.log(login) */

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    }, [])




    return (
        <>
            <header className='lg:flex flex-col hidden'>
                <Marquee className='bg-accent px-16 flex gap-4 justify-center'>
                    <span className='mx-4'><strong>Teléfono:</strong> 3107719636</span>
                    <span className='mx-4'><strong>Whatsapp:</strong> 320 6348134</span>
                    <span className='mx-4'><strong>Correo:</strong> samuelcastro@eltrolley.com</span>
                </Marquee>
                <div className="navbar z-50 bg-primary lg:px-16 px-4 lg:flex md:hidden sm:hidden">
                    <div className="justify-start grow-0 mr-4">
                        <Link to='/' className="btn btn-link text-xl ">
                            <img src='./assets/logo-portamedallas-3.png' height={96 + 16} width={96 + 16}></img>
                        </Link>
                    </div>
                    <div className="grow">
                        <Autocomplete />
                    </div>
                    <div className="justify-end grow-0">
                        {
                            !login && (
                                <a href='/login' className='text-white btn btn-ghost'><box-icon type='solid' name='user' color='#fce7f3'></box-icon>Iniciar sesión</a>
                            )
                            ||
                            (
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <box-icon type='solid' name='user' color='#fce7f3'></box-icon>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        {user.user.rol === 'admin' && (
                                            <li className='font-bold'><Link to='/admin'>Admin</Link></li>
                                        )}
                                        <li><Link to='/profile'>Perfil</Link></li>
                                        <li><Link to='/pedidos'>Mis pedidos</Link></li>
                                        <li onClick={() => logout()}><a>Cerrar sesión</a></li>
                                    </ul>
                                </div>
                            )
                        }
                        <div className="drawer drawer-end w-auto">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content indicator">
                                {/* Page content here */}
                                <span className="indicator-item badge badge-accent">{cart.length}</span>
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

            <header className="navbar fixed z-50 bg-primary lg:px-16 px-0 lg:hidden block">
                <Marquee className='bg-accent px-16 justify-center'>
                    <span className='mx-4'><strong>Teléfono:</strong> 3107719636</span>
                    <span className='mx-4'><strong>Whatsapp:</strong> 320 6348134</span>
                    <span className='mx-4'><strong>Correo:</strong> samuelcastro@eltrolley.com</span>
                </Marquee>
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
                <div className="navbar-end lg:gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <box-icon name='search' color='#fce7f3'></box-icon>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-auto">
                            <Autocomplete />
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end">

                        {
                            login && (
                                <>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <box-icon type='solid' name='user' color='#fce7f3'></box-icon>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {user.user?.rol === 'admin' && (
                                        <li className='font-bold'><Link to='/admin'>Admin</Link></li>
                                    )}
                                    <li><a>Perfil</a></li>
                                    <li><a>Mis pedidos</a></li>
                                    <li><a>Cerrar sesión</a></li>
                                    </ul>
                                </>
                            )
                            ||
                            (
                                <a href='/login' className='text-white btn btn-ghost'>Iniciar sesión</a>
                            )
                        }
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

        </header >
        </>

    )
}

export default Navbar

