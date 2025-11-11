import React, { useContext, useEffect, useRef, useState } from 'react'
import './confirmRent.scss' ; 
import { useSelector } from 'react-redux';
import { cars } from '../popular-car/PopularCar';
import { motion } from 'framer-motion';
import Footer from '../footer/Footer';
import { Form } from 'react-router-dom';

function ConfirmForm() {
    const infoCars = useSelector(({infoCars})=>infoCars);
    const confirmInfo = useSelector(({confirm})=>confirm)
    const [allPrice,setAllPrice]  = useState(confirmInfo.price)
    const [days,setDays] = useState(confirmInfo.days) ; 
    const [typeTrip,setTypeTrip] = useState(confirmInfo.type) ;  
    const [valueTrip,setValueTrip] = useState() ;
    const [car,setCar] = useState(infoCars)
    const [isvalid,setIsvalid] = useState(false)
    const [errors, setErrors] = useState({});
    const tripRef = useRef()

    const displayCarNames = ()=>{
        return cars.map((car,key)=>(
            <option key={key} value={car.carName}>{car.carName}</option>
        ))
    }

    useEffect(()=>{
        setValueTrip(tripRef.current.value)   
    })

    const handelChangeDays = (e)=>{
        setDays(e.target.value);
    }

    const handelChangeType = (e)=>{
        setTypeTrip(e.target.value) ; 
    }

    const handelChangeCar = (e) =>{
        const selectcar = cars.find(c=>c.carName===e.target.value)
        setCar(selectcar)
    }

    useEffect(()=>{
        let pricebase = 0 ; 
        if(typeTrip==='instant') pricebase = car.instantPrice ;
        else if (typeTrip==='private') pricebase =car.privatePrice ; 
        else if(typeTrip==='long') pricebase = car.longPrice ; 
        setAllPrice(days*pricebase)
    },[car,typeTrip,days])

    const validatePayment = () => {
        const card = document.getElementById('card-number').value.trim();
        const date = document.getElementById('expiration-date').value.trim();
        const code = document.getElementById('s-code').value.trim();
        const newErrors = {};

        if (!card) newErrors.card = 'Card number is required';
        if (!date) newErrors.date = 'Expiration date is required';
        if (!code) newErrors.code = 'Security code is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handelClick = ()=>{
        if (validatePayment()) {
            alert("good");
        }
    }

    return (
        <div className='confirmFormContainer'>
            <div className="form-group">
                <label htmlFor="car-name">Name</label>
                <input type="text" placeholder='Entre Your Name' />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder='Entre Your Phone Number' />
            </div>
            <div className="form-group">
                <label htmlFor="car-name">Car</label>
                <select id='car-name' onChange={handelChangeCar}>
                    <option value='toyota'>{infoCars.carName}</option>
                    {displayCarNames()}
                </select>
            </div>

            <div className='form-group'>
                <label htmlFor="days">Days</label>
                <input type="text" id='days' defaultValue={days} onChange={handelChangeDays}/>
            </div>
            <div className='form-group'>
                <label htmlFor="days">Type of Trip</label>
                <select type="text" id='days' onChange={handelChangeType} ref={tripRef}>
                    <option value={'instant'} selected={confirmInfo.type==='instant Rent'}>{'Instant'}</option>
                    <option value={'private'} selected={confirmInfo.type==='private'}>{'Privat Drive'}</option>
                    <option value={'long'} selected={confirmInfo.type==='long'}>{'Long Trip'}</option>
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor="pricing">Pricing Total</label>
                <input type="text" id='pricing' readOnly value={'$ '+allPrice}/>
            </div>
            <div className="btn">
                <h1>PAYMENT</h1>
                <button onClick={()=>setIsvalid(prev=>!prev)}>
                    {isvalid?
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.46961L7.5 1.46961L14 8.46961" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    :
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1L7.5 8L1 0.999999" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    }
                </button>
            </div>

            {isvalid && 
            <>
            <motion.div 
                initial={{y:-20}}
                animate={{y:0}}
                transition={{duration:.5}}
                className="form-group payment">

                <label htmlFor="card-number">Card Number</label>
                <input 
                    type="text" 
                    id='card-number' 
                    placeholder='1234 1234 1234 1234'
                    style={{border: errors.card ? '1px solid red' : ''}}
                />
                {errors.card && <span style={{color:'red', fontSize:'12px'}}>{errors.card}</span>}

                <label htmlFor="expiration-date">Expiration date</label>
                <input 
                    type="text" 
                    id='expiration-date' 
                    placeholder='MM/YY'
                    style={{border: errors.date ? '1px solid red' : ''}}
                />
                {errors.date && <span style={{color:'red', fontSize:'12px'}}>{errors.date}</span>}

                <label htmlFor="s-code">Security code</label>
                <input 
                    type="text" 
                    id='s-code' 
                    placeholder='CVC'
                    style={{border: errors.code ? '1px solid red' : ''}}
                />
                {errors.code && <span style={{color:'red', fontSize:'12px'}}>{errors.code}</span>}
            </motion.div>

            <div className="form-group">
                <button onClick={handelClick}>Confirmer</button>
            </div>
            </>
            }

            <Footer/>
        </div>
    )
}

export default ConfirmForm
