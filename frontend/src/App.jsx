import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'; // Ensure you import the Cart component
import PlaceHolder from './pages/PlaceOrder/PlaceHolder';
import Footer from './components/Footer/Footer';
import LoginPop from './components/LoginPop/LoginPop';
const App = () => {

const[showLogin,setShowLogin]=useState(false)

  return (
    <>

    {showLogin ? <LoginPop setShowLogin={setShowLogin}/> :<></>}
    <div className='app'>
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceHolder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
};

export default App;
