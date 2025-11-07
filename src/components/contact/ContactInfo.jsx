import React from 'react'
import style from './contact.module.scss'
import Message from '../../icons/Message'
import Tel2 from '../../icons/Tel2'
import Location2 from '../../icons/Location2'
import Time from '../../icons/Time'
function ContactInfo() {
  return (
    <div className={style.ContactInfoContainer}>
        <h3>GET IN TOUCH</h3>
        <h2>Contact Us</h2>
        <p>if you need consultation with us, you can write a message or call us, we will respond as quickly as possible</p>
        <div className={style.info}>
            <div className={style.card}>
                <button onClick={()=>{
                    window.location.href='mailto:elmehditabi0@gmail.com'
                }}><Message/></button>
                <span>elmehditabi0@gmail.com</span>
            </div>
            <div className={style.card}>
                <button onClick={()=>{
                    window.location.href='tel:+212 610962163'
                }}><Tel2/></button>
                <span>+212 610962163</span>
            </div>
            <div className={style.card}>
                <span><Time/></span>
                <span>Everyday : 08.00-21.00</span>
            </div>
            <div className={style.card}>
                <span><Location2/></span>
                <span>Jl. Raya Cihaluan No.112 Tangerang Selatan,Indonesia 41222</span>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo