import React from 'react'
import Car from '../car/Car';
import { useState } from 'react';
import LexusCT200H from '../../images/cars/carsImage/LexusCT200H.png'
import JaguarFPace from '../../images/cars/carsImage/JaguarF-Pace.png'
import MarcedesBenz from '../../images/cars/carsImage/MarcedesBenz.png'
import Bmw from '../../images/cars/carsImage/bmw.png'
import Bmw5 from '../../images/cars/carsImage/bmw5.png'
import toyota from '../../images/cars/carsImage/toyota.png'
import nissan from '../../images/cars/carsImage/nissan.png'
import honda from '../../images/cars/carsImage/honda.png'
import './popularCar.scss'
import { motion } from 'framer-motion';
import Info from './Info';
import { image } from 'framer-motion/client';
export const cars = [
  {   id :0,
    marque: 'Lexus',
    categorie: 'family-car', 
    image: LexusCT200H,
    carName: 'Lexus CT200H',
    type: 'Automatic',
    instantPrice: '80',
    privatePrice: '145',
    longPrice: '105',
    topSpeed: 180,
    model: 2013,
    seats: 4,
    description: 'Ready to rent, the engine is still good, suitable for long trips. This car is very well taken care of by me, if you need you can contact me',
  },

  { id :1,  
    marque: 'Jaguar',
    categorie: 'family-car', 
    image: JaguarFPace,
    carName: 'Jaguar F-Pace',
    type: 'Clutch',
    instantPrice: '132',
    privatePrice: '160',
    longPrice: '105',
    topSpeed: 180,
    model: 2013,
    seats: 4,
    description: 'Ready to rent, luxurious and smooth to drive, ideal for long-distance travel. Clean and well-maintained vehicle available now.',
  },
  {  id :2, 
    marque: 'Marcedes',
    categorie: 'family-car', 
    image: MarcedesBenz,
    carName: 'Marcedes Benz',
    type: 'Automatic',
    instantPrice: '132',
    privatePrice: '160',
    longPrice: '105',
    topSpeed: 180,
    model: 2013,
    seats: 4,
    description: 'A luxury car with excellent performance, perfect for family or business trips. Clean, reliable, and well cared for.',
  },

  { id :3,  
    marque: 'Toyota Camry',
    categorie: 'family-car', 
    image: toyota,
    carName: 'Toyota Camry',
    type: 'Automatic',
    instantPrice: '120',
    privatePrice: '145',
    longPrice: '95',
    topSpeed: 280,
    model: 2018,
    seats: 4,
    description: 'Ready to rent, the engine is still good, suitable for long trips. This car is very well taken care of by me, if you need you can contact me',
  },

  { id :4,  
    marque: 'BMW',
    categorie: 'sport-car', 
    image: Bmw,
    carName: 'BMW M4',
    type: 'Clutch',
    instantPrice: '200',
    privatePrice: '240',
    longPrice: '160',
    topSpeed: 300,
    model: 2020,
    seats: 4,
    description: 'Ready to rent, the engine is powerful and runs perfectly. Ideal for long trips, this BMW M4 is well maintained and very clean. Contact me',
  },
  { id :4,  
    marque: 'BMW',
    categorie: 'sport-car', 
    image: Bmw5,
    carName: 'BMW M5',
    type: 'Clutch',
    instantPrice: '150',
    privatePrice: '250',
    longPrice: '130',
    topSpeed: 300,
    model: 2018,
    seats: 3,
    description: 'Ready to rent, the engine is powerful and runs perfectly. Ideal for long trips, this BMW M4 is well maintained and very clean. Contact me',
  },

  { id : 5,
    marque: 'Nissan',
    categorie: 'family-car',
    carName: 'Nissan',
    type: 'Automatic',
    image : nissan,
    instantPrice: '90',
    privatePrice: '110',
    longPrice: '70',
    topSpeed: 200,
    model: 2022,
    seats: 6,
    description: 'Ready to rent, the engine runs perfectly and the car is reliable. Ideal for city or long trips, well maintained and clean. Contact me anytime',
  },

  { id :6,  
    marque: 'Honda',
    categorie: 'family-car', 
    carName: 'Honda',
    image : honda ,
    type: 'Automatic',
    instantPrice: '60',
    privatePrice: '75',
    longPrice: '50',
    topSpeed: 200,
    model: 2023,
    seats: 6,
    description: 'Ready to rent, the engine runs great and the car is very comfortable. Perfect for daily use or long trips, clean and well maintained. Contact me.',
  }
];

function PopularCar() {
    const [len,setLen] = useState(3) ; 
    const [isClick,setIsClick] = useState(false)
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
            type={car.type} instantPrice={car.instantPrice}
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
    id='car'
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