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
        <Footer />
    </CartProvider>
  )
}

export default DefaultLayout