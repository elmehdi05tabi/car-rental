import React from 'react'
import './ourServices.scss'
import instant from '../../images/bg/instant.png'
import private_ from '../../images/bg/private.png'
import long from '../../images/bg/long.png'
import key from '../../images/icons/key.png'
import persone from '../../images/icons/persone.png'
import root from '../../images/icons/root.png'
import Services from './Services'
import { motion } from 'framer-motion'
function OurServices() {
  const servicesListe = [
    {
      img : instant,
      icon : key,
      title : 'Instant Rent',
      text : 'We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task . . .' , 
    },
    {
      img : private_,
      icon : persone,
      title : 'Private Driver',
      text : "We have professional agents to accompany your trip useful for your protection from disturbances that you do not like . . ." , 
    },
    {
      img : long,
      icon : root,
      title : 'Long Trip',
      text : 'Long trips whenever and wherever you want can comfortably use our car collection that supports long and long trips . . .' , 
    },
  ] 
  const displayServices = ()=>{
    return servicesListe.map(service=>{
      return <Services 
      img={service.img}
      icon={service.icon}
      title={service.title}
      text={service.text}
      />
    })
  }
  return (
    <motion.div 
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    className='services-container'>
      <div className='info'>
      <h3>SERVICES</h3>
      <h1>Our Services</h1>
      <p>Our service is not only renting a car, but we also provide a private chauffeur service that can guide you on your trip and also longtrip packages to support your travel needs.</p>
      </div>
      <div className='card'>
      {displayServices()}
      </div>
    </motion.div>
  )
}

export default OurServices