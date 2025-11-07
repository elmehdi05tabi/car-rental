import React from 'react'
import style from './brandListe.module.scss' ; 
import bmw from '../../images/logoBrands/bmw.png'
import honda from '../../images/logoBrands/honda.png'
import jaguar from '../../images/logoBrands/jaguar.png'
import lexus from '../../images/logoBrands/lexus.png'
import mercedes from '../../images/logoBrands/mercedes.png'
import nissan from '../../images/logoBrands/nissan.png'
import toyota from '../../images/logoBrands/toyota.png'
import kia from '../../images/logoBrands/kia.png'
import hianday from '../../images/logoBrands/hianday.png'
import { button } from 'framer-motion/client';
import { motion } from 'framer-motion';
function BrandListe() {
    const arrayBrands = [bmw,lexus,mercedes,honda,nissan,toyota]
    const displayListeBrads = ()=>{
       return  arrayBrands.map((brand,key)=>{
            return (    
            <button key={key}>
                <img src={brand} alt={'image:'+key} />
            </button>
            )
        })
    }
  return (
    <motion.div 
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    className={style.brandListeContainer}>
        {displayListeBrads( )}
    </motion.div>
  )
}

export default BrandListe