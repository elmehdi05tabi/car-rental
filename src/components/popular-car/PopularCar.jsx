import React from 'react'
import Car from '../car/Car';
import { useState } from 'react';
import LexusCT200H from '../../images/cars/carsImage/LexusCT200H.png'
import JaguarFPace from '../../images/cars/carsImage/JaguarF-Pace.png'
import MarcedesBenz from '../../images/cars/carsImage/MarcedesBenz.png'
import Bmw from '../../images/cars/carsImage/bmw.png'
import './popularCar.scss'
import { motion } from 'framer-motion';
import Info from './Info';
function PopularCar() {
    const [len,setLen] = useState(3) ; 
    const [isClick,setIsClick] = useState(false)
        const cars = [
        {   marque  : 'Lexus' ,
            categorie : 'family-car', 
            image:LexusCT200H,
            carName:'Lexus CT200H',
            type:'Automatic',
            price:'120',
            topSpeed:180,
            // logo : lexus,
            model : 2013 ,
            seats : 4,
            description:'Ready to rent, the engine is still good, suitable for long trips. This car is very well taken care of by me, if you need you can contact me',
            },

        {   marque  : 'Jaguar' ,
            categorie : 'family-car', 
            image:JaguarFPace,
            carName:'Jaguar F - Pace',
            type:'Clutch',
            price:'132',
            topSpeed:180,
            // logo : jaguar ,
            model : 2013 ,
            description:'',
            seats : 4,
            },
        {   marque  : 'Marcedes ' ,
            categorie : 'family-car', 
            image:MarcedesBenz,
            carName:'Marcedes Benz',
            type:'Automatic',
            price:'132',
            topSpeed:180,
            // logo : merceses,
            description:'',
            seats : 4,
            },
        {   marque  : 'bmw' ,
            categorie : 'sport-car', 
            image:Bmw,
            carName:'Bmw M4',
            type:'Clutch',
            price:'200',
            topSpeed:300,
            // logo : bmw,
            model : 2020 ,
            description:"Ready to rent, the engine is powerful and runs perfectly. Ideal for long trips, this BMW M4 is well maintained and very clean. Contact me",
            },
        {
            // image:Honda,
            carName:'Honda',
            type:'Automatic',
            price:'90',
            topSpeed:200,
            // logo : honda,
            model : 2017 ,
            description:'Ready to rent, the engine runs perfectly and the car is reliable. Ideal for city or long trips, well maintained and clean. Contact me anytime',
            seats : 5,
            },
        {   marque  : 'nissan' ,
            categorie : 'family-car', 
            // image:Nissan,
            carName:'Marcedes Benz',
            type:'Automatic',
            price:'60',
            topSpeed:200,
            // toyota:nissan , 
            model : 2013 ,
            description:'Ready to rent, the engine runs great and the car is very comfortable. Perfect for daily use or long trips, clean and well maintained. Contact me.',
            seats : 6,
            }
    ]
    // afficher juste 3 elements 
    let carsElements = cars.slice(0,len)
    const handelClick = ()=>{
        setLen(prev => prev === 3 ? cars.length : 3) 
        setIsClick(prev => !prev) ; 
    }
    const displayCars = ()=>{
        return carsElements.map((car,key)=>{
            return <Car
            marque={car.marque}
            categorie={car.categorie}
            image={car.image} carName={car.carName}
            type={car.type} price={car.price}
            topSpeed = {car.topSpeed}
            description={car.description}
            logo={car.logo}
            model={car.model}
            seats={car.seats}
            key={key} 
            />
        })
    }
  return (
    <motion.div 
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    className='popularCarContainer'>
        <Info/>
    <div className='cars-container'>
        {displayCars()}
    </div>
    <button className='All' onClick={handelClick}>{isClick?'Close':'See All'} </button>
    </motion.div>
   
  )
}

export default PopularCar