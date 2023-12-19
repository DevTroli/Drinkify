import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './style'
import { store } from './store'

import Footer from './components/Footer'
import Rotas from './route'
import Cart from './components/Cart'
import React from 'react'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
