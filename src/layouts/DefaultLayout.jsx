/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { CartProvider } from "../context/cart"
import { Outlet } from "react-router-dom"

const whatsapp = 'https://api.whatsapp.com/send?phone=573206348134&text=%C2%A1Hola!%20Estoy%20en%20la%20tienda%20Portamedallas%20y%20quiero%20pedir%20m%C3%A1s%20informaci%C3%B3n.';

const DefaultLayout = () => {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
      <div className="lg:hidden fixed bottom-4 right-4">
        <a href={ whatsapp } target="_blank">
          <box-icon name='whatsapp' type='logo' animation='tada-hover' color='#b2c14b' size='lg'></box-icon>
        </a>
      </div>
      <Footer />
    </CartProvider>
  )
}

export default DefaultLayout