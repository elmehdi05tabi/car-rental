import React from 'react'
import './ourServices.scss'
function Services({icon,img,title,text}) {
  return (
    <div className='service-container' style={{backgroundImage:`url(${img})`}}>
            <img src={icon} alt="img" className='icon' />
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Services