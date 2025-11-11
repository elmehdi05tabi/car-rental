import React, { useState } from 'react'
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
      text : 'We provide direct rental services whenever and wherever you need. Our officers respond quickly to your request, ensuring you get your car on time. Enjoy fast and reliable service with just a few clicks — your comfort is our priority.' , 
    },
    {
      img : private_,
      icon : persone,
      title : 'Private Driver',
      text : "We have professional drivers ready to accompany you on any trip. They guarantee your safety, comfort, and privacy during every journey. Sit back and relax while our experts take care of everything on the road." , 
    },
    {
      img : long,
      icon : root,
      title : 'Long Trip',
      text : 'Long trips are now easier and more comfortable. With our collection of high-quality cars, you can travel far with peace of mind. Experience smooth driving, great comfort, and total freedom wherever you go' , 
    },
  ] 
  const displayServices = ()=>{
    return servicesListe.map((service,key)=>{
      return <Services 
      key={key}
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
    id='services'
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