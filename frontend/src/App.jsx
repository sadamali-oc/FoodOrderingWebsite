import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceHolder from './pages/PlaceOrder/PlaceHolder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Cart/>} />

        <Route path='/' element={<PlaceHolder/>} />

      </Routes>
    </div>
  )
}

export default App