import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Perfil from './Pages/Perfil/index'
import React from 'react'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bares/:id" element={<Perfil />} />
    </Routes>
  )
}

export default Rotas
