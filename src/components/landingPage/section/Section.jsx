import React from 'react'
import style from './section.module.scss' ; 
import img from '../../../images/cars/carLandingPage.png'
import bg from '../../../images/bg/world.png' ; 
function Section() {
  return (
    <div className={style.containerSection}>
        <img src={bg}alt="bg" />
        <img src={img} alt="car"/>
    </div>
  )
}

export default Section