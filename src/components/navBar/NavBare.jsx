import React, { useState } from 'react'
import style from './nav.module.scss'
import Logo from '../logo/Logo'
import { useNavigate } from 'react-router-dom'
import Barr from '../../icons/Barr'
function NavBare() {
  const naviget = useNavigate()
  const [isClick,setIsClick] = useState(false) ;  
  const [color,setColor] = useState("#737373")
  const handelClick = ()=>{
    setIsClick(!isClick)
    setColor(isClick?"#737373":"#F55757")
    console.log(isClick) ;
  }
  return (
    <nav className={style.navContainer}>
        <div className={style.barr}>  
          <Logo />
          <div className={style.icon}>
          <Barr color={color} handelClick={handelClick}/>
          </div>
        </div>
      <ul className={`${style.navbar} ${isClick ?style.active:''}`}>
        <li><button onClick={()=>{naviget('/')}}>Home</button></li>
        <li><button onClick={()=>window.location.href = ('/car-rental#car')}>car</button></li>
        <li><button onClick={()=>window.location.href = ('/car-rental#services')}>Services</button></li>
        <li><button onClick={()=>naviget('/about')}>About </button></li>
        <li><button onClick={()=>window.location.href = ('/car-rental#contact')}>Contact</button></li>
      </ul>

    </nav>
  )
}

export default NavBare