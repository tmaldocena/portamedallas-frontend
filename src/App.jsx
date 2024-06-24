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

function App() {

  const location = useLocation();

  return (
    <DefaultLayout>
      <Routes location={location}>
          <Route path='/' index element={ <Home /> }/>
          <Route path='/tienda' index element={ <Shop /> }/>
          <Route path='/item/:id' element={ <ViewItem /> } />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/cart' element={ <CheckCart /> } />
          <Route path='/checkout' element={ <Checkout /> } />
          <Route path='/politica' element={ <Politics /> } />
          <Route path='/pedidos' element={ <Pedidos /> } />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='*' index element={ <Error404 /> }/>
      </Routes>
    </DefaultLayout>
  )
}

export default App
