import React, { createContext, useContext } from 'react'
import { useState ,useRef,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCoodrs } from '../../features/coords/CoordsSlice';
import { getInfoConfirm } from '../../features/confirm/ConfirmSlice';
function Form({price,type,path='/confirm-rent-car'}) {
    // state location
    const [startLocation,setStartLocation] = useState(); 
    const [endLocation,setEndLocation] = useState(); 
    const [inputValue,setInputValue] = useState('');
     const [errors, setErrors] = useState({});
    // state coords 
    const [coordsStart,setCoordsStart] = useState({});
    const [coordsEnd,setCoordsEnd] = useState({});
    const apiKey = '6433ad46aa0a4debacaca6a7d9dd3cd7'; 
    const startRef = useRef();
    const endRef = useRef();
     const [days, setDays] = useState(0);
    const [allPrice,setAllPrice] = useState(0.00);
    const navigate = useNavigate() ; 
    const dispatch = useDispatch()
       // prendre localisation par défaut de utilisateure 
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition( async pos=>{
                const lat = pos.coords.latitude; 
                const lon = pos.coords.longitude; 
                const res = await fetch(
                    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`
                );
                const data = await res.json();
                setInputValue(data.features[0].properties.city);
                setCoordsStart({
                    lat:data.features[0].properties.lat,
                    lon:data.features[0].properties.lon,
                });
            }); 
        }
    },[]);
    // prendre la ville de start 
     const handelChangeStart = (e)=>{
        const value = e.target.value.trim(); 
        if(value === '') {
            setStartLocation(['']);
            return;
        }
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${value}&apiKey=${apiKey}`)
        .then(result => result.json())
        .then(json=>setStartLocation(json.features.map(data=> data.properties))); 
    };
// prandre la valuer de end
    const handelChangeEnd = (e)=>{
        const value = e.target.value.trim(); 
        if(value === '') {
            setEndLocation(['']);
            return;
        }
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${value}&apiKey=${apiKey}`)
        .then(result => result.json())
        .then(json=>setEndLocation(json.features.map(data=> data.properties))); 
    };
    // afficher les ville de start
    const displaytCitieStart = ()=>{
        if(startLocation!==undefined) {
            return startLocation.map(city=>{
                return <option value={city.formatted} key={city.place_id}/>;
            });
        }
    };
    // afficher les ville de end
    const displaytCitieEnd = ()=>{
        if(endLocation!==undefined) {
            return endLocation.map(city=>{
                return <option value={city.formatted} key={city.place_id}/>;
            });
        }
    };
    // prendre les coords de locations 
    useEffect(()=>{
        if(startLocation!==undefined) {
            startLocation.map(start=>{
                return setCoordsStart({lat:start.lat,lon:start.lon});
            });
        }
        if(endLocation!==undefined) {
            endLocation.map(end=>{
                return setCoordsEnd({lat:end.lat,lon:end.lon});
            });
        }
        
    },[startLocation,endLocation]); 
    // calculer le montant de trip
        const handelChangeTime = (e)=>{
        setDays(e.target.value);
        console.log(e.target.value) ; 
        setAllPrice(e.target.value * price);
    };
    //  validation
    const validateForm  = ()=>{
        const newErrors = {}
        if(!startRef.current.value.trim()) newErrors.start = 'Pickup location is required';
        if(!endRef.current.value.trim()) newErrors.end = 'Drop off location is required';
        if(!days || isNaN(days) || days <= 0 ) newErrors.days = 'Number of days must be valid';
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0 ;
    }
    const handelConfirme = (e)=>{
        e.preventDefault();
        if(!validateForm()) return ; 
        dispatch(getCoodrs({
            latStart : coordsStart.lat,
            lonStart : coordsStart.lon,
            latEnd : coordsEnd.lat,
            lonEnd : coordsEnd.lon,
            valide : true 
        }));
        dispatch(getInfoConfirm({
            price:allPrice,
            type:type,
            days:days
        }))
        
        navigate(path) ; 
    }
  return (
    <div>
        <div className="fromContainer">

            <div className="form-group">
                <label 
                style={errors.start &&{color:'red'}}
                htmlFor="pickup">Pickup</label>
                <div></div>
                <input 
                defaultValue={inputValue}
                list="startlocation" id='pickup'
                placeholder='Point Location'
                onChange={handelChangeStart}
                ref={startRef} 
                style={errors.start&&{border:'1px red solid'}}
                />
                {errors.start&& <p style={{color:'red',fontSize:'15px'}}>{errors.start}</p>}
                <datalist id='startlocation'>
                    {displaytCitieStart()}
                </datalist>
            </div>
            <div className="form-group">
                <label style={errors.end &&{color:'red'}} htmlFor="dropOff">Drop Off</label>
                <div></div>
                <input list="endlocation" 
                id='dropOff' placeholder='Point Location'
                ref={endRef} 
                onChange={handelChangeEnd}
                style={errors.end &&{border:'1px red solid'}}
                />
                 {errors.end&& <p style={{color:'red',fontSize:'15px',}}>{errors.start}</p>}
                <datalist id='endlocation'>
                    {displaytCitieEnd()}
                </datalist>
            </div>
            <div className="form-group">
                <label 
                style={errors.days &&{color:'red'}}
                htmlFor="estimateTime">Estimated Time</label>
                <div></div>
                <input type="text" id='estimateTime' placeholder='How many days' 
                style={errors.days &&{border:'1px red solid',}}
                onChange={handelChangeTime} />
                 {errors.days&& <p style={{color:'red',fontSize:'15px',marginTop:'2rem'}}>{errors.start}</p>}
            </div>
            <div className='form-group'>
                <label>Pricing</label>
                <div></div>
                <input type="text" readOnly value={`$ ${allPrice}`}  />
            </div>
            <div className="form-group">
                <button onClick={handelConfirme}>Rent Now !</button>
            </div>
                </div>
    </div>
  )
}

export default Form