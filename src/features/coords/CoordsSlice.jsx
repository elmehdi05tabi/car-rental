import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    latStart : null,
    lonStart : null ,
    latEnd : null,
    lonEnd : null ,
    valide : false
}
const CoordsSlice = createSlice({
    name : 'coords',
    initialState  : initialState,
    reducers : {
        getCoodrs : (state,action)=>{
            const  {latStart,lonStart,latEnd,lonEnd,valide} = action.payload 
            state.latStart = latStart
            state.lonStart = lonStart
            state.latEnd = latEnd
            state.lonEnd = lonEnd
            state.valide = valide
        }
    }
})
export default CoordsSlice.reducer 
export const {getCoodrs} = CoordsSlice.actions