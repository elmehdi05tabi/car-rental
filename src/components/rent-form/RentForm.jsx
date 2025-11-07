import React, { useState } from 'react'
import InstantRent from './InstantRent'
import PrivateDrive from './PrivateDrive'
import LongTrip from './LongTrip'
import './RentForm.scss'
import { motion } from 'framer-motion'
function RentForm() {
    const [activeForm,setActiveForm] = useState('instant')
    const renderForm = ()=>{
        switch(activeForm) {
            case 'instant' : 
            return <InstantRent/>
            case 'private' : 
            return <PrivateDrive/>
            case 'long' : 
            return <LongTrip/>
            default : 
            return ''; 
        }
    }
  return (
    <div className='rantFormContainer'>
        <div className='btnContainer'>
            <button className={activeForm ==='instant'? 'active':''} 
            onClick={()=>setActiveForm('instant')}>Instant Rent</button>
            <button className={activeForm ==='private'? 'active':''} 
            onClick={()=>setActiveForm('private')}>Private Drive</button>
            <button className={activeForm ==='long'? 'active':''} 
            onClick={()=>setActiveForm('long')}>Long Trip</button>
        </div>
        <motion.div 
        initial={{y:100,opacity:0}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration:1}}
        className='formContainer'>
            {renderForm()}
        </motion.div>
    </div>
  )
}

export default RentForm