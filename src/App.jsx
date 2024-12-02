import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Hero from './pages/Hero'

function App() {
  return (
    <>
      <h2>RTK query</h2>
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link> */}
      <Link to={'/hero'}>Hero</Link>
      <Routes>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/> */}
        <Route path='/hero' element={<Hero/>}/>
      </Routes>
    </>
  )
}

export default App
