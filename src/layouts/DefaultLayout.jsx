/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { CartProvider } from "../context/cart"

const DefaultLayout = ( { children }) => {
  return (
    <CartProvider>
        <Navbar />
        { children }
        <Footer />
    </CartProvider>
  )
}

export default DefaultLayout