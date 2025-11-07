import React from 'react'
import style from './Landingpage.module.scss'
import Description from './Description/Description'
import Section from './section/Section'
function Landingpage() {
  return (
    <div className={style.containerLandingpage}>
        <Description/>
        <Section/>
    </div>
  )
}

export default Landingpage