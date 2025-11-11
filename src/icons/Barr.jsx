import React from 'react'

function Barr({color,handelClick}){
  return (
    <div>
        <svg 
        onClick={handelClick}
        width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill={color}/>
<circle cx="2" cy="8" r="2" fill={color}/>
<circle cx="2" cy="14" r="2" fill={color}/>
<rect x="5" width="13" height="4" rx="2" fill={color}/>
<rect x="5" y="6" width="13" height="4" rx="2" fill={color}/>
<rect x="5" y="12" width="13" height="4" rx="2" fill={color}/>
</svg>

    </div>
  )
}

export default Barr