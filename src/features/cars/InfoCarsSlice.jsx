import { createSlice } from "@reduxjs/toolkit";
const initialState  = {
    marque : undefined,
    categorie : undefined , 
    image : undefined ,
    carName : undefined ,
    type : undefined ,
    price : undefined ,
    topSpeed : undefined ,
    description : undefined ,
    logo : undefined,
    model : undefined,
    seats : undefined,
    isValide : false
}
const InfoCarsSlice = createSlice({
    name : 'ifnoCars',
    initialState : initialState,
    reducers : {
        getInfoCars : (state,action)=>{
            state.marque  = action.payload.marque
            state.categorie  = action.payload.categorie
            state.image  = action.payload.image
            state.carName  = action.payload.carName
            state.type  = action.payload.type
            state.price  = action.payload.price
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