import React from 'react'
import Logo from '../logo/Logo'
import Network from '../contact/Network'
import './Footer.scss';
function Info() {
  return (
    <div className='info'>
        <Logo valide={false}/>
        <p>We are a well-known car rental service that has many partners in each region to connect with you to assist in your trip in meetings, events, holidays or long trips.</p>
        <Network/>
    </div>
  )
}

export default Info