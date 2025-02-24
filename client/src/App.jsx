import './App.css'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import NewArrival from './components/NewArrivals'
import TopSelling from './components/TopSelling'
import Testimonials from './components/Testimonial'
import Categories from './Pages/Categories'
import NewComp from './Pages/NewComp'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>  
      <Route path="/categories" element={<Categories />} />
      <Route path="/new-arrivals" element={<NewComp/>}/>
          <Route path="/" element={
          <>
            <Hero />
            <NewArrival />
            <TopSelling />
            <Testimonials />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
