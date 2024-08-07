import { Route, Routes, useLocation } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ViewItem from './pages/ViewItem';
import CheckCart from './pages/CheckCart';
import Checkout from './pages/Checkout';
import Politics from './pages/Politics';
import Pedidos from './pages/Pedidos';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserProvider } from './context/user';
import Ordered from './pages/Ordered';
import Admin from './pages/Admin';

function App() {

  const location = useLocation();


  return (
    <UserProvider>

      <Routes location={location} >
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route element={<DefaultLayout />}>
          <Route path='/' index element={<Home />} />
          <Route path='/tienda' element={<Shop />} />
          <Route path='/item/:id' element={<ViewItem />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<CheckCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/politica' element={<Politics />} />
          {
            localStorage.getItem('user') && (
              <>
                <Route path='/profile' element={<Profile />} />
                <Route path='/pedidos' element={<Pedidos />} />
              </>
            )
          }
          <Route path='/admin' element={<Admin />} />

          <Route path='/order/success' element={<Ordered />} />
          <Route path='*' index element={<Error404 />} />

        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App
