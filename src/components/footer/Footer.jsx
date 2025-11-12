import React from 'react'
import Info from './Info'
import Mn from './Mn'
import { motion } from 'framer-motion'
function Footer() {
  return (
    <motion.div 
     initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    viewport={{ once: true }}
    className='footer' id='footer'>
        <Info/>
        <Mn/>
    </motion.div>
  )
}

export default Footer