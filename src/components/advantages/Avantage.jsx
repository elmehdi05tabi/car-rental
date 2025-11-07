import React from 'react'
import './advantages.scss'
function Avantage({icon,title,text}) {
  return (
    <div className='avantage'>
        <div className='icon'>
            {icon}
        </div>
        <div className='text'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Avantage