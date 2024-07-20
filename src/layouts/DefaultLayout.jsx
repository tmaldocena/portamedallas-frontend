/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { CartProvider } from "../context/cart"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
      <div className="lg:hidden fixed bottom-4 right-4">
        <button className="">
          <box-icon name='whatsapp' type='logo' animation='tada-hover' color='#b2c14b' size='lg'></box-icon>
        </button>
      </div>
      <Footer />
    </CartProvider>
  )
}

export default DefaultLayout