import React from 'react'
import style from './nav.module.scss'
import Logo from '../logo/Logo'
function NavBare() {
  return (
    <nav className={style.navContainer}>
        <Logo />
      <ul className={style.navbar}>
        <li><a href="#about">About</a></li>
        <li><a href="#car">Car</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#teams-condition">Terms & Conditions</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBare