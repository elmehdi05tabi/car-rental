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
function App() {
  return (
    <div className='container' >
      <Provider store={store}>
      <NavBare/>
      <Landingpage/>
      <RentForm/>
      <BrandListe/>
      <PopularCar/>
      <OurServices/>
      <Advantages/>
      <Contact/>
      </Provider>
    </div>
  )
}

export default App