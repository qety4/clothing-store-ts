import { Routes, Route } from 'react-router-dom'

import Home from './Routes/Home/Home.component'
import ShopRoute from './Routes/ShopRoute/ShopRoute'
import Checkout from './Routes/Checkout/Checkout'
import PaymentPage from './Routes/PaymentPage/PaymentPage'
import Profile from './Routes/Profile/Profile'
import React from 'react'
import Loader from './Components/Loader/Loader'

const Nav = React.lazy(() => import('./Routes/Nav/Nav.component'))

const App = () => {

  return (
    <Routes>
      <Route path='/' element={
        <React.Suspense fallback={<Loader/>}>
          <Nav />
        </React.Suspense>
      }>
        {/* <Route path='/' element={<h1>Yoo</h1>}/> */}
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/shop/*' element={<ShopRoute />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/pay' element={<PaymentPage />} />
      </Route>
    </Routes>
  )
}

export default App