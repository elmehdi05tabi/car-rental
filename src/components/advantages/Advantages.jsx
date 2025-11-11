import React from 'react'
import Rent from '../../icons/Rent'
import Quality from '../../icons/Quality'
import Agent from '../../icons/Agent'
import Safetly from '../../icons/Safetly'
import Refund from '../../icons/Refund'
import Live from '../../icons/Live'
import Avantage from './Avantage'
import Info from './Info'
import { motion } from 'framer-motion'
function Advantages() {
    const listeAvantages = [
        {
            icon :<Rent/> ,
            title : 'Easy Rent',
            text : "Rent a car at our rental with an easy and fast process without disturbing your productivity",
        },
        {
            icon :<Quality/> ,
            title : "Premium Quality",
            text :"Our cars are always maintained engine health and cleanliness to provide a more comfortable driving experience" ,
        },
        {
            icon : <Agent/>,
            title :"Professional Agent" ,
            text : "You can ask your travel companion to escort and guide your journey.",
        },
        {
            icon : <Safetly/> ,
            title : "Car Safety",
            text : "We guarantee the safety of the engine on the car always running well with regular checks on the car engine.",
        },
        {
            icon : <Refund/>,
            title :"Refund" ,
            text : "Our cars are always maintained engine health and cleanliness to provide a more comfortable driving experience",
        },
        {
            icon : <Live/> ,
            title :"Live Monitoring" ,
            text : "Our service provides direct customer monitoring to monitor trips in terms of safety and comfort.",
        },
    ]
    const displayAdvantages = ()=>{
        return listeAvantages.map((adantage,key)=>{
            return <Avantage  
            key={key}
            icon={adantage.icon}
            title={adantage.title}
            text={adantage.text}
            />
        })
    }
  return (
    <motion.div 
     initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    className='advantages-container'>
        <Info/>
        <div className='listeAvnatge'>
        {displayAdvantages()}
        </div>
    </motion.div>
  )
}

export default Advantages