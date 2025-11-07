import React from 'react'
import ContactInfo from './ContactInfo'
import MapRoute from '../Map/MapRoute'
import 'leaflet/dist/leaflet.css';
import style from './contact.module.scss'
function Contact() {
  return (
    <div className={style.contactContainer}>
        <ContactInfo/>
        <MapRoute 
        start={[33.00103,-7.61662]}
        end={[33.00103,-7.61662]}
        width={'610px'}
        height={'447px'}
        />
    </div>
  )
}

export default Contact