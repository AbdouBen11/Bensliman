import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { Profiler, useEffect, useState } from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App() {

  
  return (
  <BrowserRouter>
  <div className='container'>
    <Header />
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sign-in' element={<Signin />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
    </Routes>
    <Footer />
    
  </div>
    
  </BrowserRouter>  
  )
}
