import React from 'react'
import style from './brandListe.module.scss' ; 
import bmw from '../../images/logoBrands/bmw.png'
import honda from '../../images/logoBrands/honda.png'
import lx from '../../images/logoBrands/lx.png'
import mercedes from '../../images/logoBrands/mercedes.png'
import jag from '../../images/logoBrands/jag.png'
import nissan from '../../images/logoBrands/nissan.png'
import toyota from '../../images/logoBrands/toyota.png'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function BrandListe() {
  const navigate = useNavigate()
    const arrayBrands = [lx,jag,mercedes,toyota,bmw,nissan,honda]
    const displayListeBrads = ()=>{
       return  arrayBrands.map((brand,key)=>{
            return (    
            <button key={key} onClick={()=>{navigate(`cars/${key}`)}}>
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
    viewport={{ once: true }}
    className={style.brandListeContainer}>
        {displayListeBrads( )}
    </motion.div>
  )
}

export default BrandListe