import React from 'react'
import './advantages.scss'
import { motion } from 'framer-motion'
function Avantage({icon,title,text}) {
  return (
    <div className='avantage'>
        <motion.div 
        initial={{skewX:-10}}
        animate={{skewX:[0]}}
        transition={{duration:1,delay:1}}
        className='icon'>
            {icon}
        </motion.div>
        <div className='text'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Avantage