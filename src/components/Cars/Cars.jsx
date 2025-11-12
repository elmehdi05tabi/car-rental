import React from 'react'
import { cars } from '../popular-car/PopularCar'
import Car from '../car/Car'
import { useParams } from 'react-router-dom'
import './cars.scss'
import Footer from '../footer/Footer'
function Cars(){
    const {id} = useParams() ; 
    console.log(id)
    const listeCars = cars.filter((c)=>{
        return c.id === Number(id)
    })
    console.log(listeCars)
    const displayCars = ()=>{
        return listeCars.map((c,i)=>{
           return  <Car 
            id={c.id}
            marque={c.marque}
            categorie={c.categorie}
            image={c.image} carName={c.carName}
            type={c.type} instantPrice={c.instantPrice}
            topSpeed = {c.topSpeed}
            description={c.description}
            logo={c.logo}
            model={c.model}
            seats={c.seats}
            key={i} 
            />
        })
    }
  return (
    <>
    <div className='carsCotainer'>
        {displayCars()}
    </div>
        <Footer/>
    </>
  )
}

export default Cars