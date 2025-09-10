import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Home from './component/pages/home/Home'
import About from './component/pages/about/About'
import Service from './component/pages/service/Service'
import Project from './component/pages/project/Project'
import Contact from './component/pages/contact/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
