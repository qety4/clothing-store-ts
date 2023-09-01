import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Shop from '../ShopPage/Shop.component'
import ShopProduct from '../ShopProduct/ShopProduct'


function ShopRoute() {
  return (
   <Routes>
    <Route index  element={<Shop/>}/>
    <Route path=':itemId' element={<ShopProduct/>} />
   </Routes>
  )
}

export default ShopRoute