import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import NewArrival from './components/NewArrivals';
import TopSelling from './components/TopSelling';
import Testimonials from './components/Testimonial';
import Categories from './Pages/Categories';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import ScrollToTop from './components/ScrollToTop';
import Style from './components/Style';
import NewClothes from './Pages/NewClothes';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Nav />
      <Routes>
      
        <Route path="/" element={
          <>
          
            <Hero />
            <NewArrival />
            <TopSelling />
            <Style/>
            <Testimonials />
           
          </>
        } />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/new-arrivals" element={<NewClothes/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
