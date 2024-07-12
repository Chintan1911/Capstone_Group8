
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
<<<<<<< Updated upstream
=======
import LoginPopup from './components/LoginPopup/LoginPopup'
import ExploreMenu from './components/ExploreMenu/ExploreMenu';

>>>>>>> Stashed changes

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exploremenu' element={<ExploreMenu />} /> {/* Define the route */}
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
