import React, { useState } from 'react'
import ContactInfo from './ContactInfo'
import MapRoute from '../Map/MapRoute'
import 'leaflet/dist/leaflet.css';
import style from './contact.module.scss'
import Network from './Network.jsx';
import { motion } from 'framer-motion';
function Contact() {
  // afficher center office
  const [nb,setNb] = useState(7)
  const handellClick =()=>{
    setNb(20) ;
  }
  return (
    <motion.div 
     initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    viewport={{ once: true }}
    id='contact' className={style.contactContainer}>
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
    </motion.div>
  )
}

export default Contact