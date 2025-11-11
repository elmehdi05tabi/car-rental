import React, { useState } from 'react'
import ContactInfo from './ContactInfo'
import MapRoute from '../Map/MapRoute'
import 'leaflet/dist/leaflet.css';
import style from './contact.module.scss'
import Network from './Network.jsx';
function Contact() {
  // afficher center office
  const [nb,setNb] = useState(7)
  const handellClick =()=>{
    setNb(20) ;
  }
  return (
    <div id='contact' className={style.contactContainer}>
      <div className={style.info}>
        <ContactInfo/>
        <Network/>
      </div>
        <div className={style.map}>
        <MapRoute 
        view={nb}
        start={[33.00103,-7.61662]}
        end={[33.00103,-7.61662]}
        width={'610px'}
        height={'447px'}
        isvalid={false}
        />
        <button onClick={handellClick}>Office Center Map</button>
        </div>
    </div>
  )
}

export default Contact