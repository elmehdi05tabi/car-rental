import { createSlice } from "@reduxjs/toolkit";
import toyota from '../../images/cars/carsImage/toyota.png'
import Toyta from '../../images/cars/logoBrands/toyota.png'
const initialState  = {
      id : 3,
      marque  : 'Toyota' ,
      categorie : 'family-car', 
      image:toyota,
      carName:'Toyota Camry',
      type:'Automatic',
      instantPrice:'120',
      longPrice:'150',
      privatePrice:'200',
      topSpeed:280,
      logo : Toyta,
      model : 2018 ,
      seats : 4,
      description:'Ready to rent, the engine is still good, suitable for long trips. This car is very well taken care of by me, if you need you can contact me',
}
const InfoCarsSlice = createSlice({
    name : 'ifnoCars',
    initialState : initialState,
    reducers : {
        getInfoCars : (state,action)=>{
            state.id = action.payload.id 
            state.marque  = action.payload.marque
            state.categorie  = action.payload.categorie
            state.image  = action.payload.image
            state.carName  = action.payload.carName
            state.type  = action.payload.type
            state.InstantPrice  = action.payload.InstantPrice
            state.PrivatPrice  = action.payload.PrivatPrice
            state.LongPrice  = action.payload.LongPrice
            state.topSpeed  = action.payload.topSpeed
            state.description  = action.payload.description
            state.logo  = action.payload.logo
            state.model  = action.payload.model
            state.seats  = action.payload.seats
            state.isValide  = action.payload.isValide
        },
    }
})
export default InfoCarsSlice.reducer ; 
export const {getInfoCars}  = InfoCarsSlice.actions ; 