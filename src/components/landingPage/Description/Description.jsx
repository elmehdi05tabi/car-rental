// description pour note site
import './description.scss'
import React from 'react'
function Description() {
  return (
    <div className='descriptionCotainer'>
            <h1>We Have Prepared a Car For Your Trip </h1>
            <p>We have many types of cars that are ready for you to travel anywhere and anytime.</p>
            <div className={'btn'}>
                <button onClick={()=>{window.location.href='#contact'}}>Get In Touch</button>
                <button onClick={()=>{window.location.href='#car'}}>Our Car</button>
            </div>
    </div>
  )
}

export default Description