import React from 'react'
import style from './contact.module.scss'
import { motion } from 'framer-motion'
import Insta from '../../icons/Insta';
import Ln from '../../icons/Ln.jsx';
import Fc from '../../icons/Fc';
import Twiter from '../../icons/Twiter';
function Network() {
  return (
    <div className={style.network}>
        <motion.button 
        whileHover={{y:-2}}
        className={style.sausiau} onClick={()=>{window.location.href='https://www.linkedin.com/in/el-mehdi-tabi-03b80428a/'}}>
          <Ln/>
        </motion.button>
        <motion.button 
        whileHover={{y:-2}}
        className={style.sausiau} onClick={()=>{window.location.href='https://x.com/tb05268396'}}>
          <Twiter/>
          </motion.button>
        <motion.button 
        whileHover={{y:-2}}
        className={style.sausiau} onClick={()=>{window.location.href='https://www.facebook.com/profile.php?id=100079222947413'}}>
          <Fc/>
          </motion.button>
        <motion.button 
        whileHover={{y:-2}}
        className={style.sausiau} onClick={()=>{window.location.href='https://www.instagram.com/elmehdi_tabi/?next=%2F'}}>
          <Insta/>
          </motion.button>
    </div>
  )
}

export default Network