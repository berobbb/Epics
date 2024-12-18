import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './components/Demo'
import Nav from './components/Nav'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import NewArrival from './components/NewArrivals'
import TopSelling from './components/TopSelling'


function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Hero/>
    <NewArrival/>
    <TopSelling/>
    </BrowserRouter>
    
      
  )
}

export default App
