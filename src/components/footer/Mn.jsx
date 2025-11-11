import React from 'react'
import './Footer.scss' ; 
function Mn() {
  return (
    <div className='menu'>
        <div className='card'>
            <h2>Company</h2>
            <div className="btns">
                <button>About Us</button>
                <button>cars</button>
                <button>Services</button>
                <button>Our Partner</button>
            </div>
        </div>
        <div className='card'>
            <h2>Services</h2>
            <div className="btns">
               <button>Instant Rent</button>
                <button>Private Driver</button>
                <button>Long Trip</button>
            </div>
        </div>
        <div className='card'>
            <h2>Support</h2>
            <div className="btns">
                <button>Blog</button>
                <button>FAQ</button>
                <button>Call Center</button>
                <button>Partner With Us</button>
                <button>Call Center</button>
                <button>Terms & Condition</button>
            </div>
        </div>
    </div>
  )
}

export default Mn