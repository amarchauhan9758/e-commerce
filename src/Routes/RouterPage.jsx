import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddToCart from '../Componets/AddToCart'
import ProductList from '../Componets/ProductList'

function RouterPage() {
  return (
    <>
    <Routes>
     <Route path='/' element={<ProductList/>}/>
     <Route path='/card' element={<AddToCart/>}/>
     
    </Routes>
    

   
      
    </>
  )
}

export default RouterPage
