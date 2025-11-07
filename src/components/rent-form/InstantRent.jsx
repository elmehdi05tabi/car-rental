import React from 'react'
import './RentForm.scss'
function InstantRent() {
  return (
        <form>
            <div className="form-group">
                <label htmlFor="pickup">Pickup</label>
                <div></div>
                <input type="text" id='pickup' placeholder='Point Location' />
            </div>
            <div className="form-group">
                <label htmlFor="dropOff">Drop Off</label>
                <div></div>
                <input type="text" id='dropOff' placeholder='Point Location' />
            </div>
            <div className="form-group">
                <label htmlFor="estimateTime">Estimate Time</label>
                <div></div>
                <input type="text" id='estimateTime' placeholder='Point Location' />
            </div>
            <div className='form-group'>
                <label>Pricing</label>
                <div></div>
                <input type="text" readOnly value={'0.00'} />
            </div>
            <div className="form-group">
                <button>Rent Now !</button>
            </div>
        </form>
  )
}

export default InstantRent