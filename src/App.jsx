import React from 'react'
import './App.scss'
import NavBare from './components/navBar/NavBare'
import Landingpage from './components/landingPage/Landingpage'
import RentForm from './components/rent-form/RentForm'
import BrandListe from './components/brands-liste/BrandListe'
import PopularCar from './components/popular-car/PopularCar'
import store from './app/store/store';
import OurServices from './components/our_services/OurServices'
import { Provider } from 'react-redux'
import Advantages from './components/advantages/Advantages'
import Contact from './components/contact/Contact'
import Reviews from './components/reviews/Reviews'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import ConfirmRent from './components/confirm-rent/ConfirmRent'
import Cars from './components/Cars/Cars'
import RentCar from './components/RentCar/RentCar'
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter basename="/car-rental">
        <div className='container' >
        <NavBare/>
      <Routes>
        <Route path='/' index element={
          <>
      <Landingpage/>
      <RentForm/>
      <BrandListe/>
      <PopularCar/>
      <OurServices/>
      <Advantages/>
      <Contact/>
      <Reviews/>
      <Subscribe/>
      <Footer/>
      </>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/confirm-rent-car' element={<ConfirmRent/>} />
      <Route path='/cars/:id' element={<Cars/>} />
      <Route path='/rent-car/:id' element={<RentCar/>} />
      </Routes>
    </div>
        </BrowserRouter>
      </Provider>

  )
}

export default App