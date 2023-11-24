import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import Products from './pages/Login';
import Cart from './pages/Login';
import NotFound from './pages/404';

function App() {
  return (
    <div className='content'>
      <Routes>
        <Route path="/product/:id" element={<Login />} />
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
